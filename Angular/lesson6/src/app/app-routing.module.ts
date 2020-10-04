import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SelectedComponent} from './modules/selected/components/selected/selected.component';
import {UserPageComponent} from './modules/user-page/components/user-page/user-page.component';
import {PostComponent} from './modules/post/component/post/post.component';

const routes: Routes = [
  {
    path: '', component: SelectedComponent, children: [
      {
        path: 'user_page/:id', loadChildren: () => import('./modules/user-page/user.module').then(value => value.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
