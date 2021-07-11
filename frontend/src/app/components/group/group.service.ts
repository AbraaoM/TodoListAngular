import { Group } from './group.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  baseUrl = 'http://localhost:3001/group'

  constructor(
    private http: HttpClient
  ) { }

  create(group: Group): Observable<Group>{
    return this.http.post<Group>(
      this.baseUrl,
      group
    )
  }

  read(): Observable<Group[]>{
    return this.http.get<Group[]>(
      this.baseUrl
    )
  }

  readById(id: number): Observable<Group>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Group>(url)
  }

  update(group: Group): Observable<Group> {
    const url = `${this.baseUrl}/${group.id}`
    console.log("BATATA")
    return this.http.put<Group>(url, group)
  }

}
