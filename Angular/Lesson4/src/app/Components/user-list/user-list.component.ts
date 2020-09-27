import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[] = []

  /*  constructor(private userServise:RestApiService) {
      this.userServise.getUsers().subscribe(value => this.users = value);
    }*/
  constructor(private ActivateRoute: ActivatedRoute) {
    this.ActivateRoute.data.subscribe(value => this.users = value.users)
  }

  ngOnInit(): void {
  }

}
