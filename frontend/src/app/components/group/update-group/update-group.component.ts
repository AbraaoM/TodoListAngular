import { GroupService } from './../group.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../group.model';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent implements OnInit {
  group: Group = {
    title: ''
  }

  constructor(
    private groupService: GroupService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get("id")
    this.groupService.readById(id).subscribe((group) => {
      this.group = group;
    })
  }

  update(): void {
    this.groupService.update(this.group).subscribe(() => {
      const url: string = `group/infos/${this.group.id}`
      this.router.navigate([url]);
    })
  }
}
