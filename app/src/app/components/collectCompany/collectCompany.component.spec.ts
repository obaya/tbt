import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectCompanyComponent } from './CollectCompany.component';

describe('CollectCompanyComponent', () => {
  let component: CollectCompanyComponent;
  let fixture: ComponentFixture<CollectCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
