import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-create-form-body',
  templateUrl: './blog-create-form-body.component.html',
  styleUrls: ['./blog-create-form-body.component.scss']
})
export class BlogCreateFormBodyComponent implements OnInit {
  @Input()
  @Output()
  public blogText;
  constructor() { }

  ngOnInit() {
  }

}
