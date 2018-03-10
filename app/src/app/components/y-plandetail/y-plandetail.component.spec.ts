import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YPlandetailComponent } from './y-plandetail.component';

describe('YPlandetailComponent', () => {
  let component: YPlandetailComponent;
  let fixture: ComponentFixture<YPlandetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YPlandetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YPlandetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
