import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTestByDoctorIdComponent } from './view-test-by-doctor-id.component';

describe('ViewTestByDoctorIdComponent', () => {
  let component: ViewTestByDoctorIdComponent;
  let fixture: ComponentFixture<ViewTestByDoctorIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTestByDoctorIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTestByDoctorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
