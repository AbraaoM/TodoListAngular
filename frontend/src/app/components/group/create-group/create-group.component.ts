import { GroupService } from './../group.service';
import { Group } from './../group.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  group:Group = {
    title: ''
  }

  groups: Group[] = []

  showMessage: boolean = false
  messageType: string = 'success'
  message: string = ''

  constructor(
    private groupService: GroupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.groupService.read().subscribe(groups =>{
      this.groups = groups
    })
  }

  groupExists(): boolean{
    for (let group of this.groups){
      if(group.title === this.group.title){
        return true
      }
    }
    return false
  }

  requirements(): boolean{
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if(format.test(this.group.title) ||
        this.group.title.length > 50 ||
        this.groupExists()){
      return true
    }
    return false
  }

  createGroup(): void{
    if(this.requirements()){
      this.showMessage = true
      this.messageType = 'danger'
      this.message = 'TENTE OUTRO NOME: O nome do grupo deve ter no máximo 50 caracteres; Não deve conter caracteres especiais; Não pode ter o mesmo nome que outro grupo'
      return
    }
    this.groupService.create(this.group).subscribe(() => {
      this.showMessage = true
      this.messageType = 'success'
      this.message = 'Grupo criado com sucesso'
      setTimeout(() => this.router.navigate(['/']), 1000)
    })
  }
}
