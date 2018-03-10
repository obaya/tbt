import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectPlanComponent } from './collectPlan.component';

describe('CollectPlanComponent', () => {
  let component: CollectPlanComponent;
  let fixture: ComponentFixture<CollectPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
