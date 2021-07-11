import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = 'http://localhost:3001/task'

  constructor(
    private http: HttpClient
  ) { }

  create(task: Task): Observable<Task>{
    return this.http.post<Task>(
      this.baseUrl,
      task
    )
  }

  read(): Observable<Task[]>{
    return this.http.get<Task[]>(
      this.baseUrl
    )
  }

  readById(id: number): Observable<Task>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Task>(url)
  }

  update(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Task>(url, task)
  }

  delete(id: any): Observable<Task> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Task>(url)
  }
}
