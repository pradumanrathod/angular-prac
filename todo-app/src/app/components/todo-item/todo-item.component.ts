// src/app/components/todo-item/todo-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div class="form-check">
        <input 
          class="form-check-input" 
          type="checkbox" 
          [id]="'todo-' + todo.id"
          [checked]="todo.completed"
          (change)="toggle.emit(todo.id)"
        >
        <label 
          class="form-check-label" 
          [class.text-muted]="todo.completed"
          [class.text-decoration-line-through]="todo.completed"
          [for]="'todo-' + todo.id"
        >
          {{ todo.title }}
        </label>
      </div>
      <button class="btn btn-sm btn-outline-danger" (click)="delete.emit(todo.id)">
        &times;
      </button>
    </li>
  `,
  styles: [`
    .list-group-item {
      max-width: 600px;
      margin: 0.25rem auto;
    }
  `]
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}