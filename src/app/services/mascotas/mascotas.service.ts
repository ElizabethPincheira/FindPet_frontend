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


  //AQUI OBTENGO MIS MASCOTAS
  async obtenerMisMascotas(): Promise<Mascota[]> {
  const token = localStorage.getItem('token');
  console.log('TOKEN:', token);

  const response = await axios.get<Mascota[]>(
    'http://localhost:3000/mascotas/mis-mascotas',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data; //Solo los datos
}

  //AQUI CREO UNA MASCOTA POR MEDIO DEL FORMULARIO
async crearMascota(mascota: any) {
  const token = localStorage.getItem('token');
  console.log('ENVIANDO MASCOTA:', mascota);


  const response = await axios.post(
    'http://localhost:3000/mascotas',
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

