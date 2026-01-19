import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  nombre = '';
  apellido = '';
  correo = '';
  contrasena = '';
  repetirContrasena = '';

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }





  async register() {
    console.log('registrar fue llamado');

    // 1️⃣ validar contraseñas
    if (this.contrasena !== this.repetirContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      // 2️⃣ llamar al backend
      const respuesta = await this.usuariosService.crearUsuario(
        this.nombre,
        this.apellido,
        this.correo,
        this.contrasena
      );


      console.log('usuario creado', respuesta);

      alert('Usuario registrado correctamente');

      // 3️⃣ volver al login
      this.router.navigate(['/login']);

    } catch (error: any) {
      console.error(error);

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Error al registrar usuario');
      }
    }
  }





  volver() {
    this.router.navigate(['/login']);
  }
}
