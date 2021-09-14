import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportByTestComponent } from './create-report-by-test.component';

describe('CreateReportByTestComponent', () => {
  let component: CreateReportByTestComponent;
  let fixture: ComponentFixture<CreateReportByTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportByTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReportByTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
