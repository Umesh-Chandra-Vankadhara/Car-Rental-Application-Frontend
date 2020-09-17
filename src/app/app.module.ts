import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './core/footer/footer.component';

import { SigninModalComponent } from './shared/signin-modal/signin-modal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './shared/signup/signup.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BookingComponent } from './booking/booking/booking.component';
import { UserComponent } from './user/user/user.component';
import { BookingRoutingModule } from './booking/booking/booking-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    HomeComponent,
    FooterComponent,
    UserComponent,
    BookingComponent,
    SigninModalComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BookingRoutingModule,
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
