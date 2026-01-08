
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainlayoutComponent } from './layout/main-layout/mainlayout.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { FundacionComponent } from './pages/fundacion/fundacion.component';

export const routes: Routes = [
    { path:'', component:MainlayoutComponent,
        children:[
            { path: 'home', component: MascotasComponent },
            { path: 'fundacion', component: FundacionComponent }
        ]}
   ,
   { path: 'login', component: LoginComponent },
];
