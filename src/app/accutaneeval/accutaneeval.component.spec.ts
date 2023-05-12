import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccutaneevalComponent } from './accutaneeval.component';

describe('AccutaneevalComponent', () => {
  let component: AccutaneevalComponent;
  let fixture: ComponentFixture<AccutaneevalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccutaneevalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccutaneevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
