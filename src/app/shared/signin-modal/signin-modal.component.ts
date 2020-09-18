
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'
import { faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css']
})
export class SigninModalComponent implements OnInit {
   fasigninalt = faSignInAlt;
   fauserplus =faUserPlus;
   
   showModal: boolean;
   showModalOne: boolean=false;
   submitted = false;
   signupcard:boolean;
   signincard:boolean= true;
  
   
   email:string;
   password:string;
   mobileNumber:string;
   confirmPassword:string;
   lastName:string;
   firstName:string;
  
 
  constructor() { }
  show()
  {
    // Show-Hide Modal Check
    this.showModal = true;
    this.signincard=true;
  }
    //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  // showOne()
  // {
  //   // Show-Hide Modal Check
  //   this.showModalOne = true;
  // }
  //   //Bootstrap Modal Close event
  hideOne()
  {
    this.showModalOne = false;
    this.showModal=false;
  }
  ngOnInit(): void {
  }

  onSubmit(credentials:NgForm){
    console.log(credentials);
  }

  signupUser(credentials:NgForm){
    console.log(credentials);
  }
 
  onSigninClick(){
    this.signupcard=false;
    this.signincard=true;
   }
  
  onSignupClick(){
   this.signincard =false;
   this.signupcard=true;
   }
   resetpassword(){
     this.signincard=false;
     this.signupcard=false;
     this.showModalOne=true;
   }
  }
 








