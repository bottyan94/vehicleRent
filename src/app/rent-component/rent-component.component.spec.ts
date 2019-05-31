import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentComponentComponent } from './rent-component.component';

describe('RentComponentComponent', () => {
  let component: RentComponentComponent;
  let fixture: ComponentFixture<RentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
