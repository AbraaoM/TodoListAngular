import { GroupService } from './../group.service';
import { Group } from './../group.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-group',
  templateUrl: './read-group.component.html',
  styleUrls: ['./read-group.component.css']
})
export class ReadGroupComponent implements OnInit {

  groups: Group[] = []

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.read().subscribe(groups => {
      this.groups = groups
    })
  }

}
