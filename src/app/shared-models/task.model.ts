import { TaskType } from './task-type.model';

export class Task {
  public id!: string;
  public title!: string;
  public description!: string;
  public status!: TaskType;

  constructor() {
    this.id = this.newGuid();
    this.status = TaskType.toDo;
  }

  //რენდომული id ის დაგენერირება
  private newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
