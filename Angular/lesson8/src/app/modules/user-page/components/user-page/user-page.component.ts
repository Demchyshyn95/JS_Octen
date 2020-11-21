import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../interface/user';
import {DataTranferService} from '../../../../service/data-tranfer.service';

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
              private dataTransfer: DataTranferService,
              private router: Router) {
  }

  isShow(): void {
    this.isShowBtnPost = !this.isShowBtnPost;
    this.router.navigate(['posts'], {relativeTo: this.activedRoute});
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(value => {
      this.dataTransfer.getID.next(value.id);
      this.userService.getUserById(value.id).subscribe(el => this.user = el);
    });
  }
}
