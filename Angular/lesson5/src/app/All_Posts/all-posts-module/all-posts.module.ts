import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllPostsComponent} from '../all-posts/all-posts.component';
import {PostComponent} from '../all-posts/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PostsService} from '../servicePosts/posts.service';


@NgModule({
  declarations: [
    AllPostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllPostsComponent}
    ])
  ],
  providers: [PostsService]
})
export class AllPostsModule {
}
