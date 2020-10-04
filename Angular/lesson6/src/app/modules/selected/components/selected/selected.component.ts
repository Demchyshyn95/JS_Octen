import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css'],
})
export class SelectedComponent implements OnInit {
  selected: any;
  usersId: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  showBtnUser: boolean = true;

  constructor(private router: Router) {
  }
  changeUrl(): void {
    this.router.navigate(['']);
    this.showBtnUser = true;
  }
  showBtn(): void{this.showBtnUser = !this.showBtnUser}

  ngOnInit(): void {

  }

}
