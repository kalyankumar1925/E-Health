import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologistLoginComponent } from './pathologist-login.component';

describe('PathologistLoginComponent', () => {
  let component: PathologistLoginComponent;
  let fixture: ComponentFixture<PathologistLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathologistLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathologistLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
