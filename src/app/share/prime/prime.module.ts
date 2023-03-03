import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TableModule,
    InputNumberModule,
    InputMaskModule,
    KeyFilterModule,
  ],
})
export class PrimeModule {}
