import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  correo = '';
  contrasena = '';

 
constructor(private authService:AuthService){}

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


}
