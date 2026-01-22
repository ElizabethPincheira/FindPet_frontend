
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainlayoutComponent } from './layout/main-layout/mainlayout.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { FundacionComponent } from './pages/fundacion/fundacion.component';
import { RegisterComponent } from './pages/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '', component: MainlayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },// publicaciones
            { path: 'mascotas', component: MascotasComponent },
            { path: 'fundacion', component: FundacionComponent },
            { path: 'registro', component: RegisterComponent },
            { path: 'perfil', component: PerfilComponent },
        ]
    }
    ,
    { path: 'login', component: LoginComponent },
];
