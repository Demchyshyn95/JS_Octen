import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../Servise/rest-api.service";
import {IUser} from "../../models/models";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users:IUser[]=[]
  constructor(private userServise:RestApiService) {
    this.userServise.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
