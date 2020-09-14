import { Component, OnInit } from '@angular/core';
import { faCar} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faCar =faCar;

  constructor() { }

  ngOnInit(): void {
  }

}
