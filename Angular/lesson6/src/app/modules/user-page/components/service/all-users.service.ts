import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}
