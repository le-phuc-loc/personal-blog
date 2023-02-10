import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  userInfo$ = new Observable<any>();
  isLinear = true;
  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.userInfo$ = this.db.object('info').valueChanges();
  }
}
