import { BlogModel } from './../../../models/BlogModel';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-blog-create-view',
  templateUrl: './blog-create-view.component.html',
  styleUrls: ['./blog-create-view.component.scss']
})
export class BlogCreateViewComponent implements OnInit {
  
  public newBlogPost: BlogModel = {
    publishDate: moment().toDate(),
    draft: true,
  };

  constructor() { }

  ngOnInit() {
  }

}
