import { ShareModule } from './../share/share.module';
import { CvComponent } from './cv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [CvComponent, CvHeaderComponent],
  imports: [CommonModule, NgxPrintModule, ShareModule],
})
export class CvModule {}
