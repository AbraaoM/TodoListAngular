import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  baseUrl = 'http://localhost:3001/group'
  constructor(
    private http: HttpClient
  ) { }
}
