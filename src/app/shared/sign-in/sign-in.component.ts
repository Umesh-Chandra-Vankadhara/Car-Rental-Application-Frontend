import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 email:string;
 password:string;

  constructor() { }
  
  ngOnInit(): void {
  }
  onSubmit(credentials:NgForm){
    console.log(credentials)
  }

}
