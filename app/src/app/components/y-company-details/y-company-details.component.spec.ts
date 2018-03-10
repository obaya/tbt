import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YCompanyDetailsComponent } from './y-company-details.component';

describe('YCompanyDetailsComponent', () => {
  let component: YCompanyDetailsComponent;
  let fixture: ComponentFixture<YCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
