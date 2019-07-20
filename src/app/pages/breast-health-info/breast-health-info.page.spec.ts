import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreastHealthInfoPage } from './breast-health-info.page';

describe('BreastHealthInfoPage', () => {
  let component: BreastHealthInfoPage;
  let fixture: ComponentFixture<BreastHealthInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreastHealthInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreastHealthInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
