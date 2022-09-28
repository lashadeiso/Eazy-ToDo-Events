import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../shared-models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  public taskStatusChangeEmitter = new EventEmitter<Task>();

  constructor() {}
}
