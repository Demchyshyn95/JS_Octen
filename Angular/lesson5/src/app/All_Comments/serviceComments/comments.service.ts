import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComments} from '../interfaceComments/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getComments(): Observable <IComments[]> {
   return this.http.get<IComments[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
