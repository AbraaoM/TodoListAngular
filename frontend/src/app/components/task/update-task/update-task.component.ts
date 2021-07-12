import { TaskService } from './../task.service';
import { Task } from './../task.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  task: Task = {
    title: '',
    creationTime: '',
    conclusionTime: ''
  }

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get("id")
    this.taskService.readById(id).subscribe((task) => {
      this.task = task;
    })
  }

  update(): void {
    this.taskService.update(this.task).subscribe(() => {
      const url: string = `task/infos/${this.task.id}`
      this.router.navigate([url]);
    });
  }

}
