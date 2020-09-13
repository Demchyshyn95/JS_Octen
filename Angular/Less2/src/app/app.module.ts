import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { TodoElementComponent } from './Components/todo-element/todo-element.component';
import { HomeComponent } from './Components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FullInfoElementComponent } from './Components/full-info-element/full-info-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoElementComponent,
    HomeComponent,
    FullInfoElementComponent
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
