import {
  animation,
  style,
  animate,
  trigger,
  transition,
  useAnimation,
} from '@angular/animations';

export const moveAndAppear = animation([
  style({
    transform: 'translate({{x}}, {{y}})',
    opacity: 0,
  }),

  animate(
    '500ms ease-out',
    style({ transform: 'translate(0, 0)', opacity: 1 })
  ),
]);
