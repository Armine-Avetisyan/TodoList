import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../shared/services/todo.service";
import {TodoData} from "../../shared/interfaces";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {
  todoData: TodoData[] = [] ;
  error: string = '';
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoData().subscribe(
      (data) => {this.todoData = data},
      (error) => {this.error = error.message}
    );
  }

}
