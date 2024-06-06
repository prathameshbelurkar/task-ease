import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  imports: [TaskComponent],
  standalone: true,
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
}
