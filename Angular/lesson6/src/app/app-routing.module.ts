import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SelectedComponent} from './Components/selected/selected.component';
import {UserPageComponent} from './Components/selected/user-page/user-page.component';
import {PostComponent} from './Components/selected/post/post.component';

const routes: Routes = [
  {
    path: '', component: SelectedComponent, children: [
      {
        path: 'user_page/:id', component: UserPageComponent,
        children: [
          {path: 'posts_user', component: PostComponent},
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
