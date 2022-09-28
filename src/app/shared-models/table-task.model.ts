import { TaskType } from './task-type.model';
import { Task } from './task.model';

export class TableTask {
  public toDo: Task[] = [];
  public inProgress: Task[] = [];
  public done: Task[] = [];

  addNewTask(taskItem: Task) {
    switch (taskItem.status) {
      case TaskType.toDo:
        this.toDo.push(taskItem);
        break;
    }
    switch (taskItem.status) {
      case TaskType.inProgress:
        this.inProgress.push(taskItem);
        break;
    }
    switch (taskItem.status) {
      case TaskType.done:
        this.done.push(taskItem);
        break;
    }
  }
}
