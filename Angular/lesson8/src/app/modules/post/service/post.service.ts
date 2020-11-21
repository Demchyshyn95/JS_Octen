import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {
  }

  getPostById(id): Observable<IPost> {
    return this.http.get<IPost>(`${this.url}/posts/?userId=${id}`);
  }

  getCommentsById(id): Observable<any> {
    return this.http.get(`${this.url}/comments?postId=${id}`);
  }
}
