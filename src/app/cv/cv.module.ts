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
import { MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [CvComponent, CvHeaderComponent, CvExperienceComponent],
  imports: [
    CommonModule,
    NgxPrintModule,
    ShareModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class CvModule {}
