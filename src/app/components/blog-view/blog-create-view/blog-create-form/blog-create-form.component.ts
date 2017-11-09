import { BlogModel } from './../../../../models/BlogModel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-create-form',
  templateUrl: './blog-create-form.component.html',
  styleUrls: ['./blog-create-form.component.scss']
})
export class BlogCreateFormComponent implements OnInit {
  @Input()
  public newBlogPost: BlogModel;
  constructor() { }

  ngOnInit() {
  }

}
