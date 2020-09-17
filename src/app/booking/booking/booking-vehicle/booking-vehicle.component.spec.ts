import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingVehicleComponent } from './booking-vehicle.component';

describe('BookingVehicleComponent', () => {
  let component: BookingVehicleComponent;
  let fixture: ComponentFixture<BookingVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
