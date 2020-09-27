import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestApiService} from "../../../Servise/rest-api.service";
import {IUser} from "../../../models/models";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  newUser:IUser;


  constructor( private serviceUser :RestApiService,
    private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(value =>
      this.serviceUser.getUserById(value.id).subscribe(user =>{
        this.newUser = user;
      }
    ))}

  ngOnInit(): void {
  }

}
