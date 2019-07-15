import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAssignedPage } from './non-assigned.page';

describe('NonAssignedPage', () => {
  let component: NonAssignedPage;
  let fixture: ComponentFixture<NonAssignedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAssignedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAssignedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
