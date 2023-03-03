import { ProjectInformation } from './../model/company-information';
import { Component, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { companyInformation } from '../model/company-information';

@Component({
  selector: 'app-cv-experience',
  templateUrl: './cv-experience.component.html',
  styleUrls: ['./cv-experience.component.scss'],
})
export class CvExperienceComponent {
  companyInformationForm = new FormGroup({
    company: new FormControl('', Validators.required),
    from: new FormControl(new Date(), Validators.required),
    to: new FormControl(),
  });

  companyInfo$ = this.db
    .list<companyInformation>('/info/experience')
    .valueChanges();

  constructor(private db: AngularFireDatabase) {}

  addCompanyInfo(): void {
    console.log(this.companyInformationForm.value);
    const companyInfo: companyInformation = {
      company: this.companyInformationForm.value.company,
      from: this.companyInformationForm.value.from?.toLocaleDateString(),
      to: this.companyInformationForm.value.to?.toLocaleDateString() || '',
      projects: [],
    };
    console.log(companyInfo);
    this.db.list('/info/experience').push(companyInfo);
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}
