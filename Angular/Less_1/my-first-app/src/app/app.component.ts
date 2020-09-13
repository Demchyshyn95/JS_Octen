import {Component} from '@angular/core';
import {ServiceApiService} from "./services/service-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-first-app';
  users = [];

  constructor(private serviceApiService: ServiceApiService) {
    this.serviceApiService.getUsers().subscribe((data) => {
     for (let el in data){
       this.users.push({id:el, ...data[el]})
     }
      console.log(this.users);
      console.log(data);
    })
  }
}
