import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreatePreviewComponent } from './blog-create-preview.component';

describe('BlogCreatePreviewComponent', () => {
  let component: BlogCreatePreviewComponent;
  let fixture: ComponentFixture<BlogCreatePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCreatePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCreatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
