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

  daysFromCreation: number = 2
  creationPeriod: string = ''

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {
    const id: any = this.route.snapshot.paramMap.get("id")
    this.taskService.readById(id).subscribe((task) => {
      this.task = task;

      let time: Date = new Date(this.task.creationTime)
      //Calcula quantidade de dias passados da criação da tarefa
      const today: Date =  new Date()
      console.log(time)

      this.daysFromCreation = Math.ceil(
                                Math.abs(
                                  today.getTime() - time.getTime()
                                ) / (1000 * 3600 * 24)
                              )


      //Calcula período de criação da tarefa (manhã, tarde ou noite)
      if(time.getHours() >= 0 && time.getHours() < 12){
        this.creationPeriod = 'Manhã'
      }else if (time.getHours() >= 12 && time.getHours() < 18){
        this.creationPeriod = 'Tarde'
      }else{
        this.creationPeriod = 'Noite'
      }
    });
  }

  ngOnInit(): void {

  }

}
