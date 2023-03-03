import { PersonalInformationService } from './../share/service/personal-information.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent {
  userInfo$ = this.personalInfo.getUserInfo();
  isLinear = true;
  reviewMode = true;

  constructor(private personalInfo: PersonalInformationService) {}
}
