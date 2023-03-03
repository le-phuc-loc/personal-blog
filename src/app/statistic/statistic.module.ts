import { FormsModule } from '@angular/forms';
import { StatisticComponent } from './statistic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [StatisticComponent],
  imports: [CommonModule, FormsModule, TableModule],
})
export class StatisticModule {}
