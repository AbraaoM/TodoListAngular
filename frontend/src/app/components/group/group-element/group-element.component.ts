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

  constructor() { }

  ngOnInit(): void {
  }

}
