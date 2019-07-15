import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignsSymptomsPage } from './signs-symptoms.page';

describe('SignsSymptomsPage', () => {
  let component: SignsSymptomsPage;
  let fixture: ComponentFixture<SignsSymptomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignsSymptomsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignsSymptomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
