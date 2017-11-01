import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './components/login-view/index';
import { BlogViewComponent } from './components/blog-view/index';
import { LandingViewComponent } from './components/landing-view/index';

export const AppRoutes: Routes =[
    {path: 'login', component: LoginViewComponent},
    {path: 'blog', component: BlogViewComponent},
    {path: '', component: LandingViewComponent},
    
    
]