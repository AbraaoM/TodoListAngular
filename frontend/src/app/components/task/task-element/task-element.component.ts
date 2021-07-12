import { TaskService } from './../task.service';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.css']
})
export class TaskElementComponent implements OnInit {

  @Input() task: Task = {
    title: '',
    creationTime: '',
    conclusionTime: ''
  }

    constructor(
      private taskService: TaskService,
      private router: Router,
    ) { }

    ngOnInit(): void {
    }

    deleteTask(): void {
      this.taskService.delete(this.task.id).subscribe(() => {
        //TODO Deletar todas as tasks pertencentes ao grupo
        this.router.navigate(['/']);
      });
    }

  }
