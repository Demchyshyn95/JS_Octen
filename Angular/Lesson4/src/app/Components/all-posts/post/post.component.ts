import {Component, Input, OnInit} from '@angular/core';
import {Ipost} from "../../../models/models";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post:Ipost;
  constructor() { }

  ngOnInit(): void {
  }

}
