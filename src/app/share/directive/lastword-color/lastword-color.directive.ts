import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appLastWordColor]',
})
export class LastWordColorDirective implements OnInit, AfterViewInit {
  @Input()
  appLastWordColor: string | undefined;

  constructor(private el: ElementRef<HTMLElement>) {}
  ngAfterViewInit(): void {
    if (this.appLastWordColor) {
      const lastWord = this.el.nativeElement.innerHTML.trim().split(' ').pop();

      const lastWordSpan = document.createElement('span');
      lastWordSpan.style.color = this.appLastWordColor;
      lastWordSpan.innerText = lastWord as string;
      this.el.nativeElement.innerHTML =
        this.el.nativeElement.innerHTML
          .trim()
          .split(' ')
          .slice(0, -1)
          .join(' ') + ' ';
      this.el.nativeElement.appendChild(lastWordSpan);
    }
  }
  ngOnInit(): void {}
}
