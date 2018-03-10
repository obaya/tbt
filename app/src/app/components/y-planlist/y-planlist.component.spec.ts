import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YPlanlistComponent } from './y-planlist.component';

describe('YPlanlistComponent', () => {
  let component: YPlanlistComponent;
  let fixture: ComponentFixture<YPlanlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YPlanlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YPlanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
