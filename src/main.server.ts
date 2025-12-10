import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/ui/components/app/app';
import { config } from './app/core/config/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
