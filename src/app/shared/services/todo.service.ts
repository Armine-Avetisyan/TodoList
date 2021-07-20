import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoData} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  getTodoData(): Observable<TodoData[]>{
    return this.http.get<TodoData[]>('https://60f340396d44f30017788915.mockapi.io/api/v1/tasks')
  }
}
