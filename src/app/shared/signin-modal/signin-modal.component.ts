
import { Component, OnInit} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms'
import { faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css']
})
export class SigninModalComponent implements OnInit {
   fasigninalt = faSignInAlt;
   fauserplus =faUserPlus;
   showModal: boolean;
   showModalOne: boolean;
   submitted = false;
   email:string;
   password:string;
   mobile:string;
   confirmPassword:string;

   registerForm: FormGroup;
   signupcard:boolean;
   signincard:boolean= true;
 
  constructor(private formBuilder: FormBuilder) { }
  show()
  {
    // Show-Hide Modal Check
    this.showModal = true;
  }
    //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  showOne()
  {
    // Show-Hide Modal Check
    this.showModalOne = true;
  }
    //Bootstrap Modal Close event
  hideOne()
  {
    this.showModalOne = false;
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstname: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]]
  });
  }
  onSubmit(credentials:NgForm){
    console.log(credentials);
  }





     // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onRegister() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  
  }}

onSigninClick(){
 this.signupcard=false;
 this.signincard=true;
}
onSignupClick(){
this.signincard =false;
this.signupcard=true;
}

}
