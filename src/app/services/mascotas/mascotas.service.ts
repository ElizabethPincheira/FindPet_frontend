import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from "../../../environments/environment";


export interface Mascota {
  mascota_id: number;
  nombre: string;
  tipo_mascota: string;
  usuario_id: number;
  raza: string;
  color: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class MascotasService {

    private apiUrl = environment.apiUrl + '/auth';


  // 🐾 OBTENER MIS MASCOTAS
  async obtenerMisMascotas(): Promise<Mascota[]> {
    const token = localStorage.getItem('token');
    console.log('TOKEN:', token);

    const response = await axios.get<Mascota[]>(
      `${this.apiUrl}/mis-mascotas`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }

  // ➕ CREAR MASCOTA
  async crearMascota(mascota: any) {
    const token = localStorage.getItem('token');
    console.log('ENVIANDO MASCOTA:', mascota);

    const response = await axios.post(
      this.apiUrl,
      mascota,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
}
