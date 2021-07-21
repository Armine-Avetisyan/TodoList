import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {TodoData} from "../../shared/interfaces";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() item! : TodoData;
  @Output() newDataEvent = new EventEmitter<TodoData>()
  constructor() { }

  ngOnInit(): void {
  }

  removeItem(item: TodoData) {
    this.newDataEvent.emit(item);

  }
}
