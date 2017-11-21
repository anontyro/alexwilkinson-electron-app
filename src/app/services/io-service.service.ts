import { Injectable } from '@angular/core';
import { BlogModel } from '../models/index';
// import * as fs from 'fs';
const {dialog, BrowserWindow} = window.require('electron').remote;
const {fs} = window.require('fs');

@Injectable()
export class IoServiceService {

  constructor() { }

  public saveBlogToFile(blog: BlogModel) {
    console.log("start dialog");
    dialog.showSaveDialog((filename)=>{
      if(filename === undefined) {
        console.log("no file saved");
        return;
      }
      console.log(blog);
      fs.writeFile(filename, blog.body, (err)=>{
        if(err){
          console.log("an error occured: "+err);
          throw err;
        }
        console.log('the file has been saved');
      })
      
    })
  }

  public loadBlogToFile() {

  }


}
declare global {
  interface Window {
    require: any;
  }
}