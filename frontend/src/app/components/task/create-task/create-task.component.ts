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

  tasks: Task[] = []

  group: Group = {
    title: ''
  }

  showMessage: boolean = false
  messageType: string = 'success'
  message: string = ''

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

    this.taskService.read().subscribe(tasks =>{
      this.tasks = tasks
    })
  }

  taskExists(): boolean{
    for (let task of this.tasks){
      if(task.title === this.task.title && task.groupId === this.task.groupId){
        return true
      }
    }
    return false
  }

  requirements(): boolean{
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if(format.test(this.task.title) ||
        this.task.title.length > 200 ||
        this.taskExists()){
      return true
    }
    return false
  }

  createTask(): void{
    if(this.requirements()){
      this.showMessage = true
      this.messageType = 'danger'
      this.message = 'TENTE OUTRO NOME: O nome da tarefa deve ter no máximo 200 caracteres; Não deve conter caracteres especiais; Não pode ter o mesmo nome que outra tarefa'
      return
    }

    this.taskService.create(this.task).subscribe(() => {
      this.showMessage = true
      this.messageType = 'success'
      this.message = 'Tarefa criado com sucesso'
      setTimeout(() => this.router.navigate(['/']), 1000)
    })
  }

}
