import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from "../../../../Servise/rest-api.service";
import {Ipost} from "../../../../models/models";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post:Ipost
  @Input() id:any

  constructor(private userServise:RestApiService) {
  }

  ngOnInit(): void {
    this.userServise.getPosts(this.id).subscribe(value => this.post = value)

  }

}
