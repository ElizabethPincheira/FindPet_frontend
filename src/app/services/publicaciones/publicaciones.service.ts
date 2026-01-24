import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

export interface Publicacion {
  publicacion_id?: number;
  titulo: string;
  descripcion: string;
  estado: string;
  region: string;
  comuna: string;
  mascota_id: number;
  usuario_id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class PublicacionesService {
  
  private apiUrl = environment.apiUrl + '/publicaciones';

  // CREAR PUBLICACIÓN
  async crearPublicacion(publicacion: Publicacion): Promise<Publicacion> {
    const token = localStorage.getItem('token');

    // Filtrar solo los campos necesarios
    const publicacionLimpia = {
      titulo: publicacion.titulo,
      descripcion: publicacion.descripcion,
      estado: publicacion.estado,
      region: publicacion.region,
      comuna: publicacion.comuna,
      mascota_id: publicacion.mascota_id
    };

    console.log('URL:', this.apiUrl);
    console.log('Token:', token);
    console.log('Datos:', publicacionLimpia);

    try {
      const response = await axios.post(
        this.apiUrl,
        publicacionLimpia,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error('Error detallado:', error.response?.status, error.response?.data);
      throw error;
    }
  }

  // OBTENER TODAS LAS PUBLICACIONES
  async obtenerPublicaciones(): Promise<Publicacion[]> {
    const response = await axios.get<Publicacion[]>(this.apiUrl);
    return response.data;
  }

  // OBTENER PUBLICACIONES POR MASCOTA
  async obtenerPublicacionesPorMascota(mascota_id: number): Promise<Publicacion[]> {
    const response = await axios.get<Publicacion[]>(
      `${this.apiUrl}/mascota/${mascota_id}`
    );
    return response.data;
  }

  // ELIMINAR PUBLICACIÓN
  async eliminarPublicacion(id: number): Promise<void> {
    const token = localStorage.getItem('token');

    await axios.delete(`${this.apiUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
