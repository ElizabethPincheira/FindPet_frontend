
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainlayoutComponent } from './layout/main-layout/mainlayout.component';

export const routes: Routes = [
    { path:'', component:MainlayoutComponent,
        children:[
            { path: 'home', component: HomeComponent }
        ]}
   ,
   { path: 'login', component: LoginComponent },
];
