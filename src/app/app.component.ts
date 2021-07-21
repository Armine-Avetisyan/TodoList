import {Component, OnInit} from '@angular/core';
import {TodoService} from "./shared/services/todo.service";
import {TodoData} from "./shared/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todoData: TodoData[] = [] ;
  error: string = '';
  // filterBy = "all";
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoData().subscribe(
      (data) => {this.todoData = data},
      (error) => {this.error = error.message}
    );
  }
  newData: TodoData = {
    created:  '',
    title: '',
    description: '',
    due: '',
    status: '',
  }

  addData(newData: TodoData) {
    this.todoData.push(newData);
  }

  removeItem(item: TodoData) {
    let index = this.todoData.indexOf(item);
    this.todoData.splice(index,1);
  }
  title = 'TodoList';
}

