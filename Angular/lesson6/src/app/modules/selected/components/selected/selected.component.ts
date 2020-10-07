import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IUser} from '../../../user-page/interface/user';
import {AllUsersService} from '../../service/all-users.service';


@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css'],
})
export class SelectedComponent implements OnInit {
  selected: any;
  users: IUser[];
  showBtnUser: boolean = true;

  constructor(private router: Router, private allUsersService: AllUsersService) {
    this.allUsersService.getAllUsers().subscribe(value => this.users = value
    );
  }

  changeUrl(): void {
    this.router.navigate(['']);
    this.showBtnUser = true;
  }

  showBtn(): void {
    this.showBtnUser = !this.showBtnUser;
  }

  ngOnInit(): void {

  }

}
