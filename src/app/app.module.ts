import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './components/login-view/index';
import { LandingViewComponent } from './components/landing-view/index';
import { BlogViewComponent } from './components/blog-view/index';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingMainComponent } from './components/landing-view/landing-main/landing-main.component';
import { LandingInfoFeedComponent } from './components/landing-view/landing-info-feed/landing-info-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LandingViewComponent,
    BlogViewComponent,
    NavBarComponent,
    LandingMainComponent,
    LandingInfoFeedComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
