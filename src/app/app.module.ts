import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { CvModule } from './cv/cv.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { StatisticModule } from './statistic/statistic.module';
import { HomeComponent } from './home/home.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({ ...environment.firebase })),
    AngularFireDatabaseModule,
    provideFirestore(() => getFirestore()),
    AngularFireStorageModule,
    CvModule,
    ReactiveFormsModule,
    StatisticModule,
    FormsModule,
    ShareModule,
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: BUCKET, useValue: 'personal-project-77ff2.appspot.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
