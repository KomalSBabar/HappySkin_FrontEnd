import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicalComponent } from './topical.component';

describe('TopicalComponent', () => {
  let component: TopicalComponent;
  let fixture: ComponentFixture<TopicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
