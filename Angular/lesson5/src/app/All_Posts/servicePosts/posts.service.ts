import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPosts} from '../interfacePosts/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<IPosts>{
    return this.http.get<IPosts>('https://jsonplaceholder.typicode.com/posts');
  }
}
