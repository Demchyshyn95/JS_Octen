import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../Servise/rest-api.service";

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
posts:any;

  constructor(private servicePosts:RestApiService) {
    this.servicePosts.getPosts().subscribe(value =>{
        this.posts = value
    }  )
  }
  ngOnInit(): void {
  }

}
