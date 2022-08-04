import { Component } from '@angular/core';
import {TodoModel} from "./models/todo-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  todoItems: TodoModel[] = [
    {title: 'Learn Angular'},
    {title: 'Learn TypeScript'},
  ]
  addTodo(title: string){
    this.todoItems.push({title});
  }
}
