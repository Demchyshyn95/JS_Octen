import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css']
})
export class TodoElementComponent implements OnInit {
  @Input() user: any

  constructor() {
  }

  ngOnInit(): void {
  }

}
