import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from "../../../../Servise/rest-api.service";
import {Icomment} from "../../../../models/models";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Icomment[]
  @Input() id: number

  constructor(private userServise: RestApiService) {
  }

  ngOnInit(): void {
    this.userServise.getComments(this.id).subscribe(value => this.comments = value)
  }
}
