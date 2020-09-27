import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from "../../../../Servise/rest-api.service";
import {Icomment} from "../../../../models/models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Icomment[]
  @Input() id: number

  constructor(private userServise: RestApiService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(value => {
      this.userServise.getCommentById(value.id).subscribe(comments => {
        this.comments = comments

      })
    })
  }

  ngOnInit(): void {
  }
}
