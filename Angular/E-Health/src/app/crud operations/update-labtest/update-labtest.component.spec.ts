import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLabtestComponent } from './update-labtest.component';

describe('UpdateLabtestComponent', () => {
  let component: UpdateLabtestComponent;
  let fixture: ComponentFixture<UpdateLabtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLabtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
