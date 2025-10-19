// src/app/components/todo-form/todo-form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="mb-3">
      <div class="input-group">
        <input 
          type="text" 
          class="form-control" 
          [(ngModel)]="newTodoTitle" 
          (keyup.enter)="addTodo()"
          placeholder="Add a new task..."
        >
        <button class="btn btn-primary" (click)="addTodo()">Add</button>
      </div>
    </div>
  `,
  styles: [`
    .input-group {
      max-width: 600px;
      margin: 0 auto;
    }
  `]
})
export class TodoFormComponent {
  newTodoTitle = '';
  @Output() add = new EventEmitter<string>();

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.add.emit(this.newTodoTitle.trim());
      this.newTodoTitle = '';
    }
  }
}