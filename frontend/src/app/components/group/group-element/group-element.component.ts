import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-element',
  templateUrl: './group-element.component.html',
  styleUrls: ['./group-element.component.css']
})
export class GroupElementComponent implements OnInit {
  groupTitle: string = 'Título do grupo'

  constructor() { }

  ngOnInit(): void {
  }

}
