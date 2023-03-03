import { PrimeModule } from './../share/prime/prime.module';
import { ShareModule } from './../share/share.module';
import { CvComponent } from './cv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { NgxPrintModule } from 'ngx-print';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvExperienceComponent } from './cv-experience/cv-experience.component';

@NgModule({
  declarations: [CvComponent, CvHeaderComponent, CvExperienceComponent],
  imports: [
    CommonModule,
    NgxPrintModule,
    ShareModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CvModule {}
