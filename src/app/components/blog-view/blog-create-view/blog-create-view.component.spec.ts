import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateViewComponent } from './blog-create-view.component';

describe('BlogCreateViewComponent', () => {
  let component: BlogCreateViewComponent;
  let fixture: ComponentFixture<BlogCreateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
