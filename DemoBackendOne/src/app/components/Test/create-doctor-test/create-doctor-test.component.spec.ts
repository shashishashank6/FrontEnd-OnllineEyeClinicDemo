import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoctorTestComponent } from './create-doctor-test.component';

describe('CreateDoctorTestComponent', () => {
  let component: CreateDoctorTestComponent;
  let fixture: ComponentFixture<CreateDoctorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDoctorTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDoctorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
