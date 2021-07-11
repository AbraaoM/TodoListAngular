import { GroupService } from './../group.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../group.model';

@Component({
  selector: 'app-group-element',
  templateUrl: './group-element.component.html',
  styleUrls: ['./group-element.component.css']
})
export class GroupElementComponent implements OnInit {

@Input() group: Group = {
  title: ''
}

  constructor(
    private groupService: GroupService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  deleteGroup(): void {
    this.groupService.delete(this.group.id).subscribe(() => {
      //TODO Deletar todas as tasks pertencentes ao grupo
      this.router.navigate(['/']);
    });
  }

}
