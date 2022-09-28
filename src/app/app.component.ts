import { Component } from '@angular/core';
import { TaskManagerService } from './shared-services/task-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor() {}
}
