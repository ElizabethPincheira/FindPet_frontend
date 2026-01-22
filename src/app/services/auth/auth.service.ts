import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl + '/auth';

  async login(correo: string, contrasena: string) {
    const payload = {
      correo_electronico: correo,
      contrasena: contrasena
    };

    const response = await axios.post(
      `${this.apiUrl}/login`,
      payload
    );

    return response.data;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getNombreUsuario(): string | null {
    return localStorage.getItem('usuario_nombre');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario_nombre');
  }
}
