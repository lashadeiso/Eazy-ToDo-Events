import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TaskManagerService } from './shared-services/task-manager.service';

import { AppComponent } from './app.component';
import { TaskTableCardComponent } from './shared-components/task-table-card/task-table-card.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TasksTableComponent } from './task-manager/tasks-table/tasks-table.component';
import { TaskFillerFormComponent } from './task-manager/task-filler-form/task-filler-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskTableCardComponent,
    TaskManagerComponent,
    TasksTableComponent,
    TaskFillerFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TaskManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
