import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUsers} from '../interfaceUsers/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<IUsers>{
    return this.http.get<IUsers>('https://jsonplaceholder.typicode.com/users')
  }
}
