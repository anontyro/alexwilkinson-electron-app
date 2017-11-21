import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {AppRoutes} from './app.routes';
import { DatePipe } from '@angular/common';

import {MarkdownToHtmlModule} from 'markdown-to-html-pipe';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './components/login-view/index';
import { LandingViewComponent } from './components/landing-view/index';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingMainComponent } from './components/landing-view/landing-main/landing-main.component';
import { LandingInfoFeedComponent } from './components/landing-view/landing-info-feed/landing-info-feed.component';
import { 
  BlogCreateViewComponent,
  BlogCreateFormComponent,
  BlogViewComponent,
  BlogCreatePreviewComponent 
} from './components/blog-view/index';

import {
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatDialogModule,
  NativeDateAdapter,
  MatCheckboxModule,
  MatNativeDateModule,
  MatProgressBarModule,
} from '@angular/material';
import { BlogCreateFormBodyComponent } from './components/blog-view/blog-create-view/blog-create-form/blog-create-form-body/blog-create-form-body.component';
import { IoServiceService } from './services/index';


@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LandingViewComponent,
    BlogViewComponent,
    NavBarComponent,
    LandingMainComponent,
    LandingInfoFeedComponent,
    BlogCreateViewComponent,
    BlogCreateFormComponent,
    BlogCreatePreviewComponent,
    BlogCreateFormBodyComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MarkdownToHtmlModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    
  ],
  providers: [
    IoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
