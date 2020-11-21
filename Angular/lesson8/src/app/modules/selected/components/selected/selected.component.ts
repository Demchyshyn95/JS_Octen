import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IUser} from '../../../user-page/interface/user';
import {AllUsersService} from '../../service/all-users.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css'],
})
export class SelectedComponent implements OnInit {
  form: FormGroup;
  select: FormControl;
  selected: number;
  users: IUser[];
  showBtnUser: boolean = true;

  constructor(private router: Router, private allUsersService: AllUsersService) {
  }

  changeUrl(): void {
    this.router.navigate(['']);
    this.selected = this.form.controls.select.value;
    this.showBtnUser = true;
  }

  showBtn(): void {
    this.router.navigate(['user_page', this.selected]);
    this.showBtnUser = !this.showBtnUser;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      select: new FormControl('')
    });
    this.allUsersService.getAllUsers().subscribe(value => this.users = value
    );
  }

}
