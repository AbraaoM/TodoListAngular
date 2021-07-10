import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.css']
})
export class TaskElementComponent implements OnInit {
  taskTitle: string = 'Título de uma task'
  constructor() { }

  ngOnInit(): void {
  }

}
