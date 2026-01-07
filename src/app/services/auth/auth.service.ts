import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn:'root'
})

export class AuthService {

    async login(correo:string, contrasena:string){
        const urlPrincipal = 'http://localhost:3000/auth/';
        const headers = {
            'Content-type': 'application/json',
            'token': localStorage.getItem('token') || ''
        }

        const payload = {
            correo_electronico:correo,
            contrasena: contrasena
        }

        const response = await axios.post(urlPrincipal + 'login', payload, { headers});
        return response.data

    }

}

