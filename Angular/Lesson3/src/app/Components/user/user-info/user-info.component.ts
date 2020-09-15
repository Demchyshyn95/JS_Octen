import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  id: any

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(value => this.id = value.id)
  }

  ngOnInit(): void {
  }

}
