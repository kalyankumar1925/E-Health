import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologistDashboardComponent } from './pathologist-dashboard.component';

describe('PathologistDashboardComponent', () => {
  let component: PathologistDashboardComponent;
  let fixture: ComponentFixture<PathologistDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologistDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathologistDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
