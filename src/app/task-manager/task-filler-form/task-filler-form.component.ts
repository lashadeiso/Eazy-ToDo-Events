import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../../shared-models/task.model';

@Component({
  selector: 'app-task-filler-form',
  templateUrl: './task-filler-form.component.html',
  styleUrls: ['./task-filler-form.component.css'],
})
export class TaskFillerFormComponent implements OnInit {
  taskItem = new Task();
  @Output() onTaskSaveEmitter = new EventEmitter<Task>();
  constructor() {}

  ngOnInit(): void {}
  onSaveTaskBtnClick() {
    this.onTaskSaveEmitter.emit(this.taskItem);
    this.taskItem = new Task();
  }
}
