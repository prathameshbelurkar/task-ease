import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { TasksService } from './tasks.service';

import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  imports: [TaskComponent, NewTaskComponent],
  standalone: true,
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(formData: NewTaskData) {
    this.tasksService.addTask(formData, this.userId);
    this.isAddingTask = false;
  }
}
