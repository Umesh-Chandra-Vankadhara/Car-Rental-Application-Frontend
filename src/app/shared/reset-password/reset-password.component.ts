import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  
  email:string;
  mobile:string;
  password:string;
  confirmPassword:string;

  constructor() { }

  ngOnInit(): void {
}
// onSubmit(credentials:NgForm){
//   console.log(credentials)
// }
onSubmit(value:any){
  console.log(value);
}
}

// import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
// import { NgForm } from '@angular/forms';


// @Component({
//   selector: 'app-reset-password',
//   templateUrl: './reset-password.component.html',
//   styleUrls: ['./reset-password.component.css']
// })
// export class ResetPasswordComponent implements OnInit {
//   submitted = false;
//   resetPasswordForm: FormGroup;
//   confirmPassword: FormControl;
//   moblieNumber: FormControl;
//   password: FormControl;
//   email:FormControl ;
//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.confirmPassword = new FormControl('', [Validators.required]);
//     this.moblieNumber = new FormControl('', [Validators.required]);
//     this.password = new FormControl('', [Validators.required]);
//     this.email=new FormControl('',[ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
//     this.resetPasswordForm = this.formBuilder.group({
//       moblieNumber: this.moblieNumber,
//       password: this.password,
//       email:this.email
//     });
// }
// submitForm() {
//   if (this.resetPasswordForm.valid) {
//     this.submitted = true;
//   }
// }
// }