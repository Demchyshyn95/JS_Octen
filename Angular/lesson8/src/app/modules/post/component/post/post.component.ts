import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
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
  isShow: boolean = false;

  constructor(private activedRoute: ActivatedRoute,
              private postService: PostService,
              private router: Router,
              private dataTransfer: DataTranferService) {
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(value => {
      const id = this.dataTransfer.getID.getValue();
      this.postService.getPostById(id).subscribe(posts => this.posts = posts);
    });
  }

  getComments(id) {
    this.dataTransfer.getID.next(id);
    this.router.navigate([`${id}/comments`], {relativeTo: this.activedRoute});
  }
}
