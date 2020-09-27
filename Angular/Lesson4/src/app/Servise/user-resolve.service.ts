import {Injectable} from '@angular/core';
import {Resolve} from "@angular/router";
import {IUser} from "../models/models";
import {RestApiService} from "./rest-api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser[]> {

  constructor(private userService: RestApiService) {
  }

  resolve(): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
   return  this.userService.getUsers();
  }
}
