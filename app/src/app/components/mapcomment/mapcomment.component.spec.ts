import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcommentComponent } from './mapcomment.component';

describe('MapcommentComponent', () => {
  let component: MapcommentComponent;
  let fixture: ComponentFixture<MapcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
