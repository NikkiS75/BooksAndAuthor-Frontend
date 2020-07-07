import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuthorPageComponent } from './list-author-page.component';

describe('ListAuthorPageComponent', () => {
  let component: ListAuthorPageComponent;
  let fixture: ComponentFixture<ListAuthorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAuthorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAuthorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
