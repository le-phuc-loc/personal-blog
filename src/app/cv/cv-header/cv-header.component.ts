import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import { finalize, Observable } from 'rxjs';
import { FileUpload } from 'src/app/share/model/upload-file.model';

export interface Item {
  name: string;
}

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss'],
})
export class CvHeaderComponent implements OnInit {
  @Input()
  userInfo: any;
  color = 'orange';

  imageSrc: string | ArrayBuffer | null = '';

  item: Observable<Item> | undefined;

  private basePath = '/avatar';

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: Event) {
    console.log(event.target);
    let eventTarget = event.target as HTMLInputElement;
    if (eventTarget.files && eventTarget.files[0]) {
      const file = eventTarget.files[0];

      this.pushFileToStorage({
        name: file.name,
        file: file,
      } as FileUpload);

      // const reader = new FileReader();
      // reader.onload = (e) => (this.imageSrc = reader.result);

      // reader.readAsDataURL(file);
    }
  }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.saveFileData(fileUpload);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    this.db.object('info').update({ avatar: fileUpload.url });
  }
}
