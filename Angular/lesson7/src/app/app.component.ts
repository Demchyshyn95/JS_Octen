import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lesson7';
  URL = 'https://jsonplaceholder.typicode.com/users';
  users: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
this.httpClient.get(this.URL).subscribe(value => this.users = value);
  }
}
