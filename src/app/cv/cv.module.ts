import { ShareModule } from './../share/share.module';
import { CvComponent } from './cv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { NgxPrintModule } from 'ngx-print';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CvComponent, CvHeaderComponent],
  imports: [
    CommonModule,
    NgxPrintModule,
    ShareModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
  ],
})
export class CvModule {}
