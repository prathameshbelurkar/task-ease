import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  imports: [],
  standalone: true,
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
}
