import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcnebotherComponent } from './acnebother.component';

describe('AcnebotherComponent', () => {
  let component: AcnebotherComponent;
  let fixture: ComponentFixture<AcnebotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcnebotherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcnebotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
