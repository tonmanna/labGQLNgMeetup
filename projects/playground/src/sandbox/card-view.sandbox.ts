import { sandboxOf } from 'angular-playground';
import { CardViewComponent } from 'lib';

export default sandboxOf(CardViewComponent)
  .add('CardViewComponent with simple Template', {
    template: `<lib-card-view></lib-card-view>`
  });
