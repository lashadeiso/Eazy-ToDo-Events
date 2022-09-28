import { Component, OnInit, Input } from '@angular/core';
import { TaskType } from 'src/app/shared-models/task-type.model';
import { Task } from 'src/app/shared-models/task.model';
import { TaskManagerService } from 'src/app/shared-services/task-manager.service';

@Component({
  selector: 'app-task-table-card',
  templateUrl: './task-table-card.component.html',
  styleUrls: ['./task-table-card.component.css'],
})
export class TaskTableCardComponent implements OnInit {
  @Input() taskItem = new Task();

  constructor(private managerService: TaskManagerService) {}

  ngOnInit(): void {}
  onSelectValueChange(event: Event) {
    let enumStatusValue: number = +(event.target as HTMLSelectElement).value;
    this.taskItem.status = enumStatusValue;
    this.managerService.taskStatusChangeEmitter.emit(this.taskItem);
  }
}
