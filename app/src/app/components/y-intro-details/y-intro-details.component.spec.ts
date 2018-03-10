import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YIntroDetailsComponent } from './y-intro-details.component';

describe('YIntroDetailsComponent', () => {
  let component: YIntroDetailsComponent;
  let fixture: ComponentFixture<YIntroDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YIntroDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YIntroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
