import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserComponent } from './Components/user/user.component';
import { HomeComponent } from './Components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentsComponent } from './Components/user/user-info-three/comments/comments.component';
import { PostsComponent } from './Components/user/user-info-three/posts/posts.component';
import { UserInfoComponent } from './Components/user/user-info/user-info.component';
import { UserInfoTwoComponent } from './Components/user/user-info-two/user-info-two.component';
import { UserInfoThreeComponent } from './Components/user/user-info-three/user-info-three.component';
import { AllPostsComponent } from './Components/all-posts/all-posts.component';
import {PostComponent} from "./Components/all-posts/post/post.component";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    HomeComponent,
    CommentsComponent,
    PostsComponent,
    UserInfoComponent,
    UserInfoTwoComponent,
    UserInfoThreeComponent,
    AllPostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
