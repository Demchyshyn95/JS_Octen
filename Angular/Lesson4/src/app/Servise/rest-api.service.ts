import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Icomment, Ipost, IUser} from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  constructor(private http:HttpClient) {
  }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
  getPosts(): Observable<Ipost>{
    return this.http.get<Ipost>(`https://jsonplaceholder.typicode.com/posts`)
  }
  getPostsById(id): Observable<Ipost>{
    return this.http.get<Ipost>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }
  getCommentById(id): Observable<any[]>{
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
  }
  getUserById(id): Observable<IUser>{
    return this.http.get<IUser> ( `https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
