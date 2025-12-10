import { Component, signal } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal(environment.appName);
  protected readonly version = environment.version;
}
