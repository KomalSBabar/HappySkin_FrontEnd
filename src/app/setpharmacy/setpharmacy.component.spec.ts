import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpharmacyComponent } from './setpharmacy.component';

describe('SetpharmacyComponent', () => {
  let component: SetpharmacyComponent;
  let fixture: ComponentFixture<SetpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetpharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
