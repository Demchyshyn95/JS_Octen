import { Component, OnInit } from '@angular/core';
import {PostsService} from '../servicePosts/posts.service';
import {IPosts} from '../interfacePosts/posts';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
posts: any;
  constructor(private service: PostsService) {
    this.service.getPosts().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

}
