import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportGroupPage } from './support-group.page';

describe('SupportGroupPage', () => {
  let component: SupportGroupPage;
  let fixture: ComponentFixture<SupportGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
