import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdepotComponent } from './mapdepot.component';

describe('MapdepotComponent', () => {
  let component: MapdepotComponent;
  let fixture: ComponentFixture<MapdepotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdepotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
