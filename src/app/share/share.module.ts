import { PrimeModule } from './prime/prime.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastWordColorDirective } from './directive/lastword-color/lastword-color.directive';

const declarations = [LastWordColorDirective];

@NgModule({
  declarations,
  imports: [CommonModule, PrimeModule],
  exports: [...declarations],
})
export class ShareModule {}
