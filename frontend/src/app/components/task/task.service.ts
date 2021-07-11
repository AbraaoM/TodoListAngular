import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl = 'http://localhost:3001/task'

  constructor(
    private http: HttpClient
  ) { }
}
