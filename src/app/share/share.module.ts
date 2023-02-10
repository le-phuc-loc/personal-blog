import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastWordColorDirective } from './lastword-color/lastword-color.directive';

const declarations = [LastWordColorDirective];

@NgModule({
  declarations,
  imports: [CommonModule],
  exports: [...declarations],
})
export class ShareModule {}
