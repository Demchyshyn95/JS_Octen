import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../models/models";

@Component({
  selector: 'app-user-info-three',
  templateUrl: './user-info-three.component.html',
  styleUrls: ['./user-info-three.component.css']
})
export class UserInfoThreeComponent implements OnInit {
  user: any;

  constructor(private activeRoute: ActivatedRoute, private roter: Router) {
    this.activeRoute.params.subscribe(value => {
      this.user = this.roter.getCurrentNavigation().extras.state
    })
  }

  ngOnInit(): void {
  }

}
