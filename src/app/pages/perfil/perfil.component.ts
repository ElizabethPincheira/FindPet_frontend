import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MascotasComponent } from '../mascotas/mascotas.component';
import { MascotasService } from '../../services/mascotas/mascotas.service';
declare var bootstrap: any;


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  standalone: true,
  imports: [FormsModule, MascotasComponent, FormsModule],
})


export class PerfilComponent {


  constructor(private mascotasService: MascotasService) { }

  //nombreUsuario = 'Elizabeth';

// ACÁ MUESTRA AL USUARIO QUE ESTÁ LOGUEADO PARA EL SALIDO DEL PERFIL
  get nombreUsuario(): string | null {
    return localStorage.getItem('usuario_nombre');
  }

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
      this.abrirModalFelicidades();

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


  abrirModalFelicidades() {
    const modalFelicidadesEl = document.getElementById('modalFelicidades');
    const modal = new bootstrap.Modal(modalFelicidadesEl);
    modal.show();
  }


  cerrarModales() {
    // Cierra el modal de felicitaciones
    const modalFelicidadesEl = document.getElementById('modalFelicidades');
    const modalFelicidades = bootstrap.Modal.getInstance(modalFelicidadesEl);
    modalFelicidades.hide();

    // Cierra el modal de formulario de mascota
    const modalMascotaEl = document.getElementById('modalMascota');
    const modalMascota = bootstrap.Modal.getInstance(modalMascotaEl);
    modalMascota.hide();
  }


  guardarPublicacion() {
    console.log('Publicación:', this.reporte);
  }
}
