import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../model/user';
import {DataTranferService} from '../../service/data-tranfer.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: IUser;
  isShowBtnPost: boolean = true;

  constructor(private userService: UserService,
              private activedRoute: ActivatedRoute,
              private dataTransfer: DataTranferService) {
    this.activedRoute.params.subscribe(value => {
      this.dataTransfer.getID.next(value.id);
      this.userService.getUserById(value.id).subscribe(el => this.user = el);
    });
  }

  isShow(): void {
    this.isShowBtnPost = !this.isShowBtnPost;
  }

  ngOnInit(): void {
  }

}
