import { Injectable } from '@angular/core';
import { BlogModel } from '../models/index';

const {dialog, BrowserWindow} = window.require('electron').remote;
const fs = window.require('fs');

@Injectable()
export class IoServiceService {

  constructor() { }

  public saveBlogToFile(blog: BlogModel) {
    dialog.showSaveDialog(BrowserWindow,{
      title: blog.title,
      defaultPath: '~/blogPosts/'+blog.title+'.bp'
    },(filename)=>{
      if(filename === undefined) {
        console.log("no file saved");
        return;
      }

      fs.writeFile(filename, blog, (err)=>{
        if(err){
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