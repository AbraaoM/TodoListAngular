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

}
