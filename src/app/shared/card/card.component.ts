import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Mascota } from '../../services/mascotas/mascotas.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PublicacionesService } from '../../services/publicaciones/publicaciones.service';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @ViewChild('modalFelicidadesP') modalFelicidades!: ElementRef;


  // ANY TAMBIEN ES TEMPORAL SOLO PARA MOSTRAR CARD EN EL FRONTEND
  @Input() mascota!: any;


  //ESTO ES TEMPORAL HASTA CREAR LA TABLA FOTOGRAFIAS
    fotoDefault = 'assets/images/img_card.jpg';

  publicacion = {
    titulo: '',
    descripcion: '',
    estado: '',
    region: '',
    comuna: ''
  };

  constructor(private publicacionesService: PublicacionesService) { }

  async guardarPublicacion(form: NgForm, mascotaId: number) {
    if (form.invalid) return;

    try {
      const datosPublicacion = {
        ...this.publicacion,
        mascota_id: mascotaId
      };

      await this.publicacionesService.crearPublicacion(datosPublicacion);

      // limpiar formulario
      form.resetForm();
      this.publicacion = {
        titulo: '',
        descripcion: '',
        estado: '',
        region: '',
        comuna: ''
      };

      // cerrar modal de publicación
      const modalPublicacionEl = document.getElementById(`modalPublicacion${mascotaId}`);
      const modalPublicacion = bootstrap.Modal.getInstance(modalPublicacionEl)
        || new bootstrap.Modal(modalPublicacionEl);

      modalPublicacion.hide();


      // abrir modal de felicitaciones
      const modalFelicidadesEl = document.getElementById('modalFelicidadesP');

      if (modalFelicidadesEl) {
        const modalFelicidades =
          bootstrap.Modal.getInstance(modalFelicidadesEl)
          || new bootstrap.Modal(modalFelicidadesEl);

        modalFelicidades.show();
      }

    } catch (error: any) {
      console.error('Error detallado al guardar publicación:', error);
      const errorMsg = error.response?.data?.message || error.message || 'Error desconocido';
      alert(`Error al guardar la publicación: ${errorMsg}`);
    }
  }


  abrirModal(mascotaId: number) {
    const modalEl = document.getElementById(`modalPublicacion${mascotaId}`);
    if (!modalEl) return;

    const modal = new bootstrap.Modal(modalEl, {
      backdrop: 'static',
      keyboard: false
    });

    modal.show();
  }


  cerrarModales() {
    const modalFelicidadesEl = document.getElementById('modalFelicidadesP');
    const modalFelicidades = bootstrap.Modal.getInstance(modalFelicidadesEl);
    modalFelicidades.hide();
  }
}
