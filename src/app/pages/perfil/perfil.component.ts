import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {




  get nombreUsuario(): string | null {
    return localStorage.getItem('usuario_nombre');
  }



}
