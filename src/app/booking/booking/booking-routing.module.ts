import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingVehicleComponent } from './booking-vehicle/booking-vehicle.component';


 const routes: Routes = [
  {path:'bookvehicle',component:BookingVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
