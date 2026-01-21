import { Injectable } from '@angular/core';
import axios from 'axios';


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

  async obtenerMisMascotas(): Promise<Mascota[]> {
  const token = localStorage.getItem('token');

  const response = await axios.get<Mascota[]>(
    'http://localhost:3000/mascotas/mis-mascotas',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data; // 👈 SOLO los datos
}

}

