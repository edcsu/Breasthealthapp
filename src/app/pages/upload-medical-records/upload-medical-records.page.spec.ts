import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMedicalRecordsPage } from './upload-medical-records.page';

describe('UploadMedicalRecordsPage', () => {
  let component: UploadMedicalRecordsPage;
  let fixture: ComponentFixture<UploadMedicalRecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMedicalRecordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMedicalRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
