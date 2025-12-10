import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/core/config/app.config';
import { App } from './app/ui/components/app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
