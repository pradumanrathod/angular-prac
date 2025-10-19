// src/app/app.component.ts
import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],  // Removed RouterOutlet
  template: `
    <div class="container py-4">
      <app-todo-list></app-todo-list>
    </div>
  `,
  styles: [`
    body {
      background-color: #f8f9fa;
    }
  `]
})
export class AppComponent {
  title = 'Todo App';
}