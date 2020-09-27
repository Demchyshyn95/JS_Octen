import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from "./Components/user-list/user-list.component";
import {HomeComponent} from "./Components/home/home.component";
import {UserInfoComponent} from "./Components/user/user-info/user-info.component";
import {UserResolveService} from "./Servise/user-resolve.service";
import {UserInfoTwoComponent} from "./Components/user/user-info-two/user-info-two.component";
import {UserInfoThreeComponent} from "./Components/user/user-info-three/user-info-three.component";
import {AllPostsComponent} from "./Components/all-posts/all-posts.component";
import {CommentsComponent} from "./Components/user/user-info-three/comments/comments.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user_list', component: UserListComponent, resolve:{users: UserResolveService},
  children:[
    /*{path:'user_page/:id', component:UserInfoComponent}*/
    /*{path:'user_page/:id', component:UserInfoTwoComponent}*/
  ]},
  {path:'user_page/:id', component:UserInfoThreeComponent,children:[
      {path:'comments/:id',component:CommentsComponent}
    ]},
  {path:'posts', component: AllPostsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
