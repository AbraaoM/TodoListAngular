import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-infos',
  templateUrl: './group-infos.component.html',
  styleUrls: ['./group-infos.component.css']
})
export class GroupInfosComponent implements OnInit {
  groupTitle: string = 'Nome do grupo'
  nTasks: number = 0
  nTasksMonth: number = 0
  nTasksMorning: number = 0
  nTasksEvening: number = 0
  nTasksNight: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
