import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
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
) {}

    async crearLogin(){
      console.log('correo', this.correo),
      console.log('contraseña', this.contrasena)
      
      const respuesta = await this.authService.login(this.correo, this.contrasena)

      if(respuesta.access_token){
        localStorage.setItem('token', respuesta.access_token);
        console.log('login exitoso');
      } else {
        console.log('error en el login');
      }
      

      console.log('respuesta', respuesta)

    }

    volver() {
  this.router.navigate(['/home']);
  // o '/login', '/home', según tu routing
}



}
