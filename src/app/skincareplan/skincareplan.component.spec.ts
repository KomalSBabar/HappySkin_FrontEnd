import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareplanComponent } from './skincareplan.component';

describe('SkincareplanComponent', () => {
  let component: SkincareplanComponent;
  let fixture: ComponentFixture<SkincareplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkincareplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkincareplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
