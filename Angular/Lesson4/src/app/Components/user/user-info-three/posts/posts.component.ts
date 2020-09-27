import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from "../../../../Servise/rest-api.service";
import {Ipost} from "../../../../models/models";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsArray: any;
  posts: Ipost[];

  constructor(private userServise: RestApiService, private activetedRoute: ActivatedRoute) {

    this.activetedRoute.params.subscribe(params => {

      this.userServise.getPostsById(params.id).subscribe(value => {

        this.postsArray = value;
        this.posts = this.postsArray.filter(el => el.userId.toString() === params.id)
      })

    })
  }


  ngOnInit(): void {

  }

}
