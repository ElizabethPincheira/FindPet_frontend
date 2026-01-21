import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MascotasComponent } from '../mascotas/mascotas.component';
import { MascotasService } from '../../services/mascotas/mascotas.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  standalone: true,
  imports: [FormsModule, MascotasComponent, FormsModule],
})


export class PerfilComponent {


  constructor(private mascotasService: MascotasService) {}

  nombreUsuario = 'Elizabeth';

  mascota = {
    nombre: '',
    tipo_mascota: '',
    descripcion: '',
    raza: '',
    color: '',
    numero_chip: ''
  };

  reporte = {
    titulo: '',
    descripcion: '',
    estado: '',
    region: '',
    comuna: ''
  };

  async guardarMascota() {
  try {
    const nuevaMascota = await this.mascotasService.crearMascota(this.mascota);
    console.log('Mascota guardada:', nuevaMascota);

    // limpiar formulario
    this.mascota = {
      nombre: '',
      tipo_mascota: '',
      descripcion: '',
      raza: '',
      color: '',
      numero_chip: ''
    };

  } catch (error) {
    console.error('Error al guardar mascota', error);
  }
}


  guardarReporte() {
    console.log('Reporte:', this.reporte);
  }
}
