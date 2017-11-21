import { BlogModel } from './../../../../models/BlogModel';
import { Component, OnInit, Input } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
import { IoServiceService } from '../../../../services/index';

@Component({
  selector: 'app-blog-create-form',
  templateUrl: './blog-create-form.component.html',
  styleUrls: ['./blog-create-form.component.scss']
})
export class BlogCreateFormComponent implements OnInit {
  @Input()
  public newBlogPost: BlogModel;
  constructor(
    private dateAdapter: DateAdapter<NativeDateAdapter>,
    private ioService: IoServiceService
  ) { }

  ngOnInit() {
  }
  public saveBtn() {
    this.ioService.saveBlogToFile(this.newBlogPost);
  }
}
