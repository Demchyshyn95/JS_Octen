import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from './All_Users/all-users/all-users.component';

const routes: Routes = [
  {
    path: 'comments',
    loadChildren: () => import ('../app/All_Comments/all-comments_module/all-comments.module').then(m => m.AllCommentsModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('../app/All_Posts/all-posts-module/all-posts.module').then(m => m.AllPostsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../app/All_Users/all-users-module/all-users.module').then(m => m.AllUsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
