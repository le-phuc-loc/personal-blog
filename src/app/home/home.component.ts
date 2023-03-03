import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { moveAndAppear } from '../share/animation/animation';
import { PersonalInformationService } from '../share/service/personal-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('leftToRight', [
      transition(':enter', [
        useAnimation(moveAndAppear, { params: { x: '-50px', y: '0px' } }),
      ]),
    ]),
    trigger('topToBottom', [
      transition(':enter', [
        useAnimation(moveAndAppear, { params: { x: '0px', y: '-50px' } }),
      ]),
    ]),
    trigger('rightToLeft', [
      transition(':enter', [
        useAnimation(moveAndAppear, { params: { x: '50px', y: '0px' } }),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  userInfo$ = this.personalInfo.getUserInfo();

  @ViewChild('tw') typewriterElement;

  constructor(private personalInfo: PersonalInformationService) {}
  ngOnInit(): void {}
}
