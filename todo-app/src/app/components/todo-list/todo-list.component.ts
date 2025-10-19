// src/app/components/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoFormComponent],
  template: `
    <div class="container mt-4">
      <h2 class="text-center mb-4">My Todo List</h2>
      <app-todo-form (add)="addTodo($event)"></app-todo-form>
      <ul class="list-group">
        @for (todo of todos; track todo.id) {
          <app-todo-item 
            [todo]="todo" 
            (toggle)="toggleTodo($event)"
            (delete)="deleteTodo($event)"
          ></app-todo-item>
        } @empty {
          <div class="text-center text-muted mt-4">
            No todos yet. Add one above!
          </div>
        }
      </ul>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
    }
  `]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(title: string): void {
    this.todoService.addTodo(title);
    this.todos = this.todoService.getTodos();
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id);
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }
}