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

  public blogTextArea: HTMLTextAreaElement = <HTMLTextAreaElement> document.getElementById('blog-body');

  constructor() { }

  ngOnInit() {
  }

  public getSelection(before: string, after: string) {
    console.log("clicked");
	  let textarea: HTMLTextAreaElement = this.blogTextArea;
    if (document.activeElement === textarea) {
      if (typeof textarea.selectionStart =='number' && typeof textarea.selectionEnd =='number') {
        
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd;

        let selectedText = textarea.value.slice(start, end);
        let beforeMyText = textarea.value.slice(0,start);
        let afterMyText = textarea.value.slice(end);

        let newText = beforeMyText + before + selectedText + after + afterMyText;

        textarea.value = newText;

      }
    }
  }
  



}
/*
 createListElement() {
    if(document.activeElement === textarea) {
        if(typeof textarea.selectionStart == 'number' && typeof textarea.selectionEnd == 'number') {
            // All browsers except IE
            var start = textarea.selectionStart;
            var end = textarea.selectionEnd;

            var selectedText = textarea.value.slice(start, end);
            var before = textarea.value.slice(0, start);
            var after = textarea.value.slice(end);

            var text = before + '- ' + selectedText + after;
            textarea.value = text;
       }
   }
}
    }
*/
