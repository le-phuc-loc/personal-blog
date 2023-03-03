import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class PersonalInformationService {
  private userInfoObj = this.db.object('info');

  constructor(private db: AngularFireDatabase) {}

  getUserInfo(): Observable<any> {
    return this.userInfoObj.valueChanges();
  }
}
