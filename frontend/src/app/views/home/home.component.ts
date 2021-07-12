import { Task } from './../../components/task/task.model';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from './../../components/group/group.service';
import { TaskService } from './../../components/task/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[] = []

  constructor(
    private taskService: TaskService,
    private groupService: GroupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.taskService.read().subscribe(tasksRead => {
      tasksRead.reverse().forEach((elem) => {
        this.tasks.length < 10 ?
          this.tasks.push(elem) :
          null
      })
    })
  }

}
