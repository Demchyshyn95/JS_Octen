import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataTranferService} from '../../../../service/data-tranfer.service';
import {PostService} from '../../service/post.service';
import {IPost} from '../../interface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: IPost;

  constructor(private activedRoute: ActivatedRoute,
              private userService: PostService,
              private dataTransfer: DataTranferService) {
    this.activedRoute.params.subscribe(value => {
      const id = this.dataTransfer.getID.getValue();
      this.userService.getPostById(id).subscribe(posts => this.posts = posts);
    });
  }

  ngOnInit(): void {
  }

}
