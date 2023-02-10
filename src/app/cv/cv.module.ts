import { CvComponent } from './cv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { MatStepperModule } from '@angular/material/stepper';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [CvComponent, CvHeaderComponent],
  imports: [CommonModule, MatStepperModule, NgxPrintModule],
})
export class CvModule {}
