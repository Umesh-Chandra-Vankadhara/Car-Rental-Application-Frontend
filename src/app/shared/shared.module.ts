import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import {SignInComponent} from './sign-in/sign-in.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SigninModalComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
