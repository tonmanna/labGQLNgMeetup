import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [ MatButtonModule, MatCheckboxModule]
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
