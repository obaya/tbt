import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YCommentComponent } from './y-comment.component';

describe('YCommentComponent', () => {
  let component: YCommentComponent;
  let fixture: ComponentFixture<YCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
