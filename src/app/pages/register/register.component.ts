import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterModule],
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


  mostrarModal = false;



  async register() {
    console.log('registrar fue llamado');

    // validar contraseñas
    if (this.contrasena !== this.repetirContrasena) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      // llamar al backend
      const respuesta = await this.usuariosService.crearUsuario(
        this.nombre,
        this.apellido,
        this.correo,
        this.contrasena
      );


      console.log('usuario creado', respuesta);


      this.mostrarModal = true;

    } catch (error: any) {
      console.error(error);

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Error al registrar usuario');
      }
    }
  }


  irAlLogin() {
    this.mostrarModal = false;
    this.router.navigate(['/login']);
  }


  volver() {
    this.router.navigate(['/home']);
  }
}
