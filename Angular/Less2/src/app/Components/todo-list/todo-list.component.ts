import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  users = [];

  constructor(private userApi: ApiService) {
    this.userApi.getUsers().subscribe(el => this.users = el);
  }

  ngOnInit(): void {

  }

}
