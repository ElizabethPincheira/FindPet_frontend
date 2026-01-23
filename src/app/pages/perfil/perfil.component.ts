import { Component, ViewChild, ElementRef } from '@angular/core';
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


  @ViewChild('modalFelicidades') modalFelicidades!: ElementRef;

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
      // SOLUCIÓN ERROR 400: Enviamos una copia limpia sin IDs ni objetos extra
      const datosEnvio = { ...this.mascota };
      
      const nuevaMascota = await this.mascotasService.crearMascota(datosEnvio);
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
    if (modalFelicidadesEl) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalFelicidadesEl);
      modal.show();
    }
  }


  cerrarModales() {
    // SOLUCIÓN TYPEERROR: Uso de getOrCreateInstance para evitar el 'null'
    const modalFelicidadesEl = document.getElementById('modalFelicidades');
    if (modalFelicidadesEl) {
      const modalFelicidades = bootstrap.Modal.getOrCreateInstance(modalFelicidadesEl);
      modalFelicidades.hide();
    }

    const modalMascotaEl = document.getElementById('modalMascota');
    if (modalMascotaEl) {
      const modalMascota = bootstrap.Modal.getOrCreateInstance(modalMascotaEl);
      modalMascota.hide();
    }
  }


  guardarPublicacion() {
    console.log('Publicación:', this.reporte);
  }
}