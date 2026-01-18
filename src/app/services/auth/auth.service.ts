import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    async login(correo: string, contrasena: string) {
        const urlPrincipal = 'http://localhost:3000/auth/';
        const headers = {
            'token': localStorage.getItem('token') || ''
        }

        const payload = {
            correo_electronico: correo,
            contrasena: contrasena
        }
        try {
            const response = await axios.post(urlPrincipal + 'login', payload);
            return response.data;
        } catch (error) {
            throw error;
        }

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

