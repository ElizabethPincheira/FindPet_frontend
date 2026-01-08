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
  providedIn: 'root'
})

export class MascotasService {

  constructor() { }

  //listar mascotas
  async obtenerMascotas() {

    const misMascotas = await axios.get('http://localhost:3000/mascotas')
    

   return misMascotas.data
  }
}
