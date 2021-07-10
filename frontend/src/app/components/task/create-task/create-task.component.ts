import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  groupName:string = "Grupo Genérico"

  constructor() { }

  ngOnInit(): void {
  }

}
