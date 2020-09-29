import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectedComponent } from './Components/selected/selected.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { UserPageComponent } from './Components/selected/user-page/user-page.component';
import { PostComponent } from './Components/selected/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectedComponent,
    SelectedComponent,
    UserPageComponent,
    PostComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatFormFieldModule,
      HttpClientModule
    ],
  exports: [
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
