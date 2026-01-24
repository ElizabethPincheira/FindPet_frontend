import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = environment.apiUrl + '/usuarios';



  async crearUsuario(
    nombre: string,
    apellido: string,
    correo: string,
    contrasena: string
  ) {
    const payload = {
      nombre,
      apellido,
      correo_electronico: correo,
      contrasena
    };

    const response = await axios.post(this.apiUrl, payload);
    return response.data;
  }
}




