import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingVehicleComponent } from './booking/booking/booking-vehicle/booking-vehicle.component';
import { HomeComponent } from './home/home/home.component';
import { AddVehicleComponent } from './user/user/add-vehicle/add-vehicle.component';
import { AdminDashboardComponent } from './user/user/admin-dashboard/admin-dashboard.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'booking-vehicle',component:BookingVehicleComponent},
  {path:'home',component:HomeComponent},
  {path:'add-vehicle',component:AddVehicleComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }