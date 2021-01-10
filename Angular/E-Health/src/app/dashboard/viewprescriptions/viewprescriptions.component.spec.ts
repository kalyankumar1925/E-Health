import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprescriptionsComponent } from './viewprescriptions.component';

describe('ViewprescriptionsComponent', () => {
  let component: ViewprescriptionsComponent;
  let fixture: ComponentFixture<ViewprescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
