import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostComponent} from './component/post/post.component';
import {CommentsComponent} from '../comments/comments.component';

const routes: Routes = [
  {
    path: '', component: PostComponent, children: [
      {path: ':id/comments', component: CommentsComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
