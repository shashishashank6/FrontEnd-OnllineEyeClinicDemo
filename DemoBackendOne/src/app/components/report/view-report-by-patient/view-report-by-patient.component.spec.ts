import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportByPatientComponent } from './view-report-by-patient.component';

describe('ViewReportByPatientComponent', () => {
  let component: ViewReportByPatientComponent;
  let fixture: ComponentFixture<ViewReportByPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReportByPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportByPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
