import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from '../../interfaceUsers/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() user: IUsers;
  constructor() { }

  ngOnInit(): void {
  }

}
