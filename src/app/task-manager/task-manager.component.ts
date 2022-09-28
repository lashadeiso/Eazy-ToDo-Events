import { Component, OnInit } from '@angular/core';
import { Task } from '../shared-models/task.model';
import { TableTask } from '../shared-models/table-task.model';
import { TaskManagerService } from '../shared-services/task-manager.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
})
export class TaskManagerComponent implements OnInit {
  tableTask = new TableTask();

  constructor(private managerService: TaskManagerService) {}

  ngOnInit(): void {
    this.managerService.taskStatusChangeEmitter.subscribe((request: Task) => {
      let indexOfElement = this.tableTask.toDo.findIndex(
        (item) => item.id === request.id
      );
      if (indexOfElement >= 0) {
        this.tableTask.toDo.splice(indexOfElement, 1);
      } else {
        indexOfElement = this.tableTask.inProgress.findIndex(
          (item) => item.id === request.id
        );
        if (indexOfElement >= 0) {
          this.tableTask.inProgress.splice(indexOfElement, 1);
        } else {
          indexOfElement = this.tableTask.done.findIndex(
            (item) => item.id === request.id
          );
          this.tableTask.done.splice(indexOfElement, 1);
        }
      }

      this.tableTask.addNewTask(request);
    });
  }

  onTaskSaveSubscribe(taskItem: Task) {
    this.tableTask.addNewTask(taskItem);
  }
}
