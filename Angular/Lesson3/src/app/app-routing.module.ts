import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from "./Components/user-list/user-list.component";
import {UserComponent} from "./Components/user/user.component";
import {HomeComponent} from "./Components/home/home.component";
import {UserInfoComponent} from "./Components/user/user-info/user-info.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user_list', component: UserListComponent},
  {path: 'user_list/user_page', component: UserComponent},
  {path:'user_list/:id', component:UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
