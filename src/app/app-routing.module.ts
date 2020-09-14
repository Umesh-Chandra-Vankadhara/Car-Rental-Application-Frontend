import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninModalComponent } from './shared/signin-modal/signin-modal.component';


const routes: Routes = [
  { path:'signin',component:SigninModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
