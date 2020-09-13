import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-full-info-element',
  templateUrl: './full-info-element.component.html',
  styleUrls: ['./full-info-element.component.css']
})
export class FullInfoElementComponent implements OnInit {
  id: number;

  constructor(private acticateRoute: ActivatedRoute) {
    this.acticateRoute.params.subscribe(value => this.id = value.id);
  }

  ngOnInit(): void {
  }

}
