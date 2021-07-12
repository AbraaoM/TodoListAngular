import { ActivatedRoute } from '@angular/router';
import { TaskService } from './../task.service';
import { Task } from './../task.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-infos',
  templateUrl: './task-infos.component.html',
  styleUrls: ['./task-infos.component.css']
})



export class TaskInfosComponent implements OnInit {
  task: Task = {
    title: '',
    creationTime: '',
    conclusionTime: ''
  }

  taskTitle: string = 'Tarefa Genérica'
  daysFromCreation: number = 2
  creationPeriod: string = 'tarde'
  conclusionDate: string = '21/02/1994'

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {
    const id: any = this.route.snapshot.paramMap.get("id")
    this.taskService.readById(id).subscribe((task) => {
      this.task = task;
    });
  }

  ngOnInit(): void {
  }

}
