import { sandboxOf } from 'angular-playground';
import { ListItemComponent } from 'lib';

export default sandboxOf(ListItemComponent)
  .add('ListItemComponent with simple Template', {
    template: `<lib-list-item></lib-list-item>`
  });
