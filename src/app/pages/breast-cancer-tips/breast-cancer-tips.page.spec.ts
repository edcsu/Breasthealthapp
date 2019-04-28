import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastCancerTipsPage } from './breast-cancer-tips.page';

describe('BreastCancerTipsPage', () => {
  let component: BreastCancerTipsPage;
  let fixture: ComponentFixture<BreastCancerTipsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreastCancerTipsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreastCancerTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
