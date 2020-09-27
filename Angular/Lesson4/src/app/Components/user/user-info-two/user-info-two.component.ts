import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../models/models";

@Component({
  selector: 'app-user-info-two',
  templateUrl: './user-info-two.component.html',
  styleUrls: ['./user-info-two.component.css']
})
export class UserInfoTwoComponent implements OnInit {
user:IUser;

  constructor(private router: Router,private activeRoute : ActivatedRoute) {
    this.activeRoute.params.subscribe(value => {
      console.log(this.router.getCurrentNavigation().extras.state);
    })

  }

  ngOnInit(): void {
  }

}
