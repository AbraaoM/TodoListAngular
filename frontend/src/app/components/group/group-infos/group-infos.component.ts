import { TaskService } from './../../task/task.service';
import { Group } from './../group.model';
import { GroupService } from './../group.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../task/task.model'

@Component({
  selector: 'app-group-infos',
  templateUrl: './group-infos.component.html',
  styleUrls: ['./group-infos.component.css']
})
export class GroupInfosComponent implements OnInit {

  group: Group = {
    title: ''
  }
  tasks: Task[] = []

  nTasks: number = 0
  nTasksMonth: number = 0
  nTasksMorning: number = 0
  nTasksEvening: number = 0
  nTasksNight: number = 0

  constructor(
    private taskService: TaskService,
    private groupService: GroupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get("id")
    this.groupService.readById(id).subscribe((group) => {
      this.group = group;
    });

    this.taskService.read().subscribe((tasksRead) => {
      tasksRead.forEach((elem) => {
        if(elem.groupId == this.group.id){
          this.tasks.push(elem)
          this.nTasks++

          const today: Date = new Date()
          let time: Date = new Date(elem.creationTime)
          if(time.getHours() >= 0 && time.getHours() < 12){
            //manha
            this.nTasksMorning++
          }else if (time.getHours() >= 12 && time.getHours() < 18){
            //tarde
            this.nTasksEvening++
          }else{
            //noite
            this.nTasksNight++
          }

          if(time.getMonth === today.getMonth){
            this.nTasksMonth++
          }
        }
      })
    })
  }



}
