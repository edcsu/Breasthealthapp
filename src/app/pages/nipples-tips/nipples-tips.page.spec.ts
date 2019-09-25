import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NipplesTipsPage } from './nipples-tips.page';

describe('NipplesTipsPage', () => {
  let component: NipplesTipsPage;
  let fixture: ComponentFixture<NipplesTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NipplesTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NipplesTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
