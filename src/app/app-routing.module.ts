import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { SigninModalComponent } from './shared/signin-modal/signin-modal.component';
import { SignupComponent } from './shared/signup/signup.component';


const routes: Routes = [
  // { path:'signin',component:SignInComponent},
  // { path:'signup', component:SignupComponent},
  { path:'sigin-modal',component:SigninModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
