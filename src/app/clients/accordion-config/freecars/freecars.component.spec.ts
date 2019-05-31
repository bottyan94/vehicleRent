import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreecarsComponent } from './freecars.component';

describe('FreecarsComponent', () => {
  let component: FreecarsComponent;
  let fixture: ComponentFixture<FreecarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreecarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
