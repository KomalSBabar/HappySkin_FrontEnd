import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductupsellComponent } from './productupsell.component';

describe('ProductupsellComponent', () => {
  let component: ProductupsellComponent;
  let fixture: ComponentFixture<ProductupsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductupsellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductupsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
