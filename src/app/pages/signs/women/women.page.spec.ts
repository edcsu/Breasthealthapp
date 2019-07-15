import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenPage } from './women.page';

describe('WomenPage', () => {
  let component: WomenPage;
  let fixture: ComponentFixture<WomenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
