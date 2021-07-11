import { Group } from './../group.model';
import { GroupService } from './../group.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-infos',
  templateUrl: './group-infos.component.html',
  styleUrls: ['./group-infos.component.css']
})
export class GroupInfosComponent implements OnInit {

  group: Group = {
    title: ''
  }

  nTasks: number = 0
  nTasksMonth: number = 0
  nTasksMorning: number = 0
  nTasksEvening: number = 0
  nTasksNight: number = 0

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get("id")
    this.groupService.readById(id).subscribe((group) => {
      this.group = group;
    });
  }

}
