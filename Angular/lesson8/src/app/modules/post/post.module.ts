import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent} from './component/post/post.component';
import {PostService} from './service/post.service';


@NgModule({
  declarations: [
    PostComponent,
  ],
    imports: [
        CommonModule,
        PostRoutingModule,
    ],
  providers:[
    PostService
  ]
})
export class PostModule { }
