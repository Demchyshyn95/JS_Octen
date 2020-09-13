import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http:HttpClient) {}

  getUsers():Observable<Object>{
    return this.http.get<Object>('https://htpp-less3-api.firebaseio.com/todolist.json')

  }

}
