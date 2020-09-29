import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../service/user.service';
import {IPost} from '../../model/post';
import {DataTranferService} from '../../service/data-tranfer.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: IPost;

  constructor(private activedRoute: ActivatedRoute,
              private userService: UserService,
              private dataTransfer: DataTranferService) {
    this.activedRoute.params.subscribe(value => {
      const id = this.dataTransfer.getID.getValue();
      this.userService.getPostById(id).subscribe(posts => this.posts = posts);
    });
  }

  ngOnInit(): void {
  }

}
