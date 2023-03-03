import { HomeComponent } from './home/home.component';
import { StatisticComponent } from './statistic/statistic.component';
import { CvComponent } from './cv/cv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'statistic', component: StatisticComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
