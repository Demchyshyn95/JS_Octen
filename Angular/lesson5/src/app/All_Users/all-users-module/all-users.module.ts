import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllUsersComponent} from '../all-users/all-users.component';
import {UserComponent} from '../all-users/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UsersService} from '../serviceUsers/users.service';


@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllUsersComponent}
    ])
  ],
  providers: [UsersService]
})
export class AllUsersModule {
}
