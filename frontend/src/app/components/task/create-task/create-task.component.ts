import { GroupService } from './../../group/group.service';
import { Group } from './../../group/group.model';
import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = {
    title: '',
    creationTime: '',
    conclusionTime: ''
  }

  group: Group = {
    title: ''
  }

  constructor(
    private taskService: TaskService,
    private groupService: GroupService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const gid: any = this.route.snapshot.paramMap.get("gid")
    this.groupService.readById(gid).subscribe((group) => {
      this.group = group;
    })
    this.task.groupId = gid
  }

  createTask(): void{
    this.taskService.create(this.task).subscribe(() => {
      // TODO: Exibir mensagem
      this.router.navigate(['/'])
    })
  }

}
