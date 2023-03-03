import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export interface Report {
  capital: number;
  totalProfit: number;
  currentEquity: number;
  monthlyReport: MonthlyReport[];
}

export interface MonthlyReport {
  monthYear: string;
  base: number;
  finalEquity: number;
  profit: number;
}

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent {
  report$ = this.db.object<Report>('report').valueChanges();

  constructor(private db: AngularFireDatabase) {}

  add() {
    this.db.object<Report>('report').set({
      capital: 400.89,
      totalProfit: 0,
      currentEquity: 0,
      monthlyReport: [
        {
          monthYear: '1/3/2023',
          base: 400.89,
          finalEquity: 0,
          profit: 0,
        },
      ],
    });
  }
}
