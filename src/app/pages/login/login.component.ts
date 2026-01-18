import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  correo = '';
  contrasena = '';


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async crearLogin() {
    console.log('correo', this.correo),
    console.log('contraseña', this.contrasena)
    console.log('👉 crearLogin fue llamado');


    const respuesta = await this.authService.login(this.correo, this.contrasena)

    //se guarda el token y el nombre en localstorage
    if (respuesta.access_token) {
      localStorage.setItem('token', respuesta.access_token);
      localStorage.setItem('usuario_nombre', respuesta.nombre);

      console.log('token guardado:', localStorage.getItem('token'));
      console.log('nombre guardado:', localStorage.getItem('usuario_nombre'));



      this.router.navigate(['/home']);

      console.log('login exitoso');
    } else {
      console.log('error en el login');
    }

    console.log('respuesta', respuesta)

  }

  volver() {
    this.router.navigate(['/home']);
  }

  entrar() {
    this.router.navigate(['/home']);
  }
}