import { Component, OnInit, Input } from '@angular/core';
import { BlogModel } from '../../../../models/BlogModel';

@Component({
  selector: 'app-blog-create-preview',
  templateUrl: './blog-create-preview.component.html',
  styleUrls: ['./blog-create-preview.component.scss']
})
export class BlogCreatePreviewComponent implements OnInit {
  @Input()
  public newBlogPost: BlogModel;
  constructor() { }

  ngOnInit() {
  }

}
