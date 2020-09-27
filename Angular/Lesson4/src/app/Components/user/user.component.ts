import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: IUser

  constructor(private router: Router, private activetedRoute: ActivatedRoute) {
  }

  goSomeWhere(user:IUser): void {
    this.router.navigate(['user_page', user.id], {
      /*relativeTo: this.activetedRoute,*/
      state:user
    })

  }

  ngOnInit(): void {
  }

}
