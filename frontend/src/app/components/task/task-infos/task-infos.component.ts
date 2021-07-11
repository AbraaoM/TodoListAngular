import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-infos',
  templateUrl: './task-infos.component.html',
  styleUrls: ['./task-infos.component.css']
})
export class TaskInfosComponent implements OnInit {
  taskTitle: string = 'Tarefa Genérica'
  daysFromCreation: number = 2
  creationPeriod: string = 'tarde'
  conclusionDate: string = '21/02/1994'


  constructor() { }

  ngOnInit(): void {
  }

}
