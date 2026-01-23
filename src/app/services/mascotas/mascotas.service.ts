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
  numero_chip: string;
}

@Injectable({
  providedIn: 'root',
})
export class MascotasService {

    private apiUrl = environment.apiUrl + '/mascotas';


  //OBTENER MIS MASCOTAS
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

  //CREAR MASCOTA
  async crearMascota(mascota: any) {
    const token = localStorage.getItem('token');
    
    // Filtrar solo los campos necesarios para evitar enviar datos innecesarios
    const mascotaLimpia = {
      nombre: mascota.nombre,
      tipo_mascota: mascota.tipo_mascota,
      descripcion: mascota.descripcion,
      raza: mascota.raza || '',
      color: mascota.color || '',
      numero_chip: mascota.numero_chip || ''
    };
    
    console.log('ENVIANDO MASCOTA:', mascotaLimpia);

    const response = await axios.post(
      this.apiUrl,
      mascotaLimpia,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
}
