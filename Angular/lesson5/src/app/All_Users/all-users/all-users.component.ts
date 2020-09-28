import { Component, OnInit } from '@angular/core';
import {UsersService} from '../serviceUsers/users.service';
import {IUsers} from '../interfaceUsers/users';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
users: any;
  constructor(private service: UsersService) {
    this.service.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
