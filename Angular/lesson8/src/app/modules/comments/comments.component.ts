import {Component, OnInit} from '@angular/core';
import {PostService} from '../post/service/post.service';
import {Router} from '@angular/router';
import {DataTranferService} from '../../service/data-tranfer.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: '';

  constructor(private postService: PostService,
              private dataTranferService: DataTranferService
  ) {}

  ngOnInit(): void {
    const postID = this.dataTranferService.getID.getValue();
    this.postService.getCommentsById(postID).subscribe(value => {
      this.comments = value;
    });
  }
}
