import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://localhost:3000/usuarios';

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
