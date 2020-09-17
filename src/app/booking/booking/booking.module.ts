import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingVehicleComponent } from './booking-vehicle/booking-vehicle.component';


@NgModule({
  declarations: [BookingVehicleComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
