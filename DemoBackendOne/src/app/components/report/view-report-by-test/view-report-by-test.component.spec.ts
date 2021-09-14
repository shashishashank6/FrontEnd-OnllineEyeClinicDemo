import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReportByTestComponent } from './view-report-by-test.component';

describe('ViewReportByTestComponent', () => {
  let component: ViewReportByTestComponent;
  let fixture: ComponentFixture<ViewReportByTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReportByTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReportByTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
