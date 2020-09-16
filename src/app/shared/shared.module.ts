import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import {SignInComponent} from './sign-in/sign-in.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    SigninModalComponent,
    SignInComponent,
    SignupComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
