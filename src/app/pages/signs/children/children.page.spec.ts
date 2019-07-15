import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenPage } from './children.page';

describe('ChildrenPage', () => {
  let component: ChildrenPage;
  let fixture: ComponentFixture<ChildrenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
