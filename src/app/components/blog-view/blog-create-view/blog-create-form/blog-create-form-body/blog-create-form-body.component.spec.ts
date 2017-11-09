import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreateFormBodyComponent } from './blog-create-form-body.component';

describe('BlogCreateFormBodyComponent', () => {
  let component: BlogCreateFormBodyComponent;
  let fixture: ComponentFixture<BlogCreateFormBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreateFormBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreateFormBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
