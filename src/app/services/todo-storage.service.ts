import { Injectable } from '@angular/core';
import {TodoModel} from "../models/todo-model";

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {
  todoItems: TodoModel[] = [
    {title: 'Learn Angular'},
    {title: 'Learn TypeScript'},
  ]
  constructor() { }
  addTodo(title: string){
    this.todoItems.push({title});
  }
}
