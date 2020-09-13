import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {TodoListComponent} from './Components/todo-list/todo-list.component';
import {TodoElementComponent} from './Components/todo-element/todo-element.component';
import {FullInfoElementComponent} from './Components/full-info-element/full-info-element.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todoList', component: TodoListComponent},
  {path: 'todoEl', component: TodoElementComponent},
  {path: 'todoList/:id', component: FullInfoElementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
