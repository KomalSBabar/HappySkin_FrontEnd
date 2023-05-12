import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingfrequencyComponent } from './shippingfrequency.component';

describe('ShippingfrequencyComponent', () => {
  let component: ShippingfrequencyComponent;
  let fixture: ComponentFixture<ShippingfrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingfrequencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingfrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
