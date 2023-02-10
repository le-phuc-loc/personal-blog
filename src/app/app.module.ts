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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({ ...environment.firebase })),
    AngularFireDatabaseModule,
    CvModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
