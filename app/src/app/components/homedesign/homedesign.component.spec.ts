import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedesignComponent } from './homedesign.component';

describe('HomedesignComponent', () => {
  let component: HomedesignComponent;
  let fixture: ComponentFixture<HomedesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
