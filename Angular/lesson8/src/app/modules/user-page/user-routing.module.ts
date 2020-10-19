import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserPageComponent} from './components/user-page/user-page.component';

const routes: Routes = [
  {
    path: '', component: UserPageComponent, children: [
      {path: 'posts', loadChildren: () => import('../post/post.module').then(value => value.PostModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
