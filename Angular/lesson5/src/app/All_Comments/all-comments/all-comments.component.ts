import {Component, OnInit} from '@angular/core';
import {CommentsService} from '../serviceComments/comments.service';
import {IComments} from '../interfaceComments/comments';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
comments: IComments[];
  constructor(private service: CommentsService) {
    this.service.getComments().subscribe(value => this.comments = value);
  }

  ngOnInit(): void {
  }

}
