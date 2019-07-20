import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistPage } from './specialist.page';

describe('SpecialistPage', () => {
  let component: SpecialistPage;
  let fixture: ComponentFixture<SpecialistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
