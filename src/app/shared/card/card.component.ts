import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Mascota } from '../../services/mascotas/mascotas.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PublicacionesService } from '../../services/publicaciones/publicaciones.service';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

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

  @Input() mascota!: Mascota;

  publicacion = {
    titulo: '',
    descripcion: '',
    estado: '',
    region: '',
    comuna: ''
  };

  constructor(private publicacionesService: PublicacionesService) {}

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
      const modalPublicacion = bootstrap.Modal.getInstance(modalPublicacionEl);
      modalPublicacion.hide();

      // abrir modal de felicitaciones
      const modalFelicidadesEl = document.getElementById('modalFelicidadesP');
      const modalFelicidades = new bootstrap.Modal(modalFelicidadesEl);
      modalFelicidades.show();

    } catch (error) {
      console.error('Error al guardar publicación:', error);
    }
  }

  cerrarModales() {
    const modalFelicidadesEl = document.getElementById('modalFelicidadesP');
    const modalFelicidades = bootstrap.Modal.getInstance(modalFelicidadesEl);
    modalFelicidades.hide();
  }
}
