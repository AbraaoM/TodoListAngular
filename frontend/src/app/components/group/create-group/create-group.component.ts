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

  constructor(
    private groupService: GroupService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createGroup(): void{
    this.groupService.create(this.group).subscribe(() => {
      // TODO: Exibir mensagem
      this.router.navigate(['/'])
    })
  }
}
