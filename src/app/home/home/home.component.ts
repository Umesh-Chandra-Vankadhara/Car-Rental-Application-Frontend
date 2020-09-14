import { Component, OnInit } from '@angular/core';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faArrowCircleRight=faArrowCircleRight;
  constructor() { }

  ngOnInit(): void {
  }

}
