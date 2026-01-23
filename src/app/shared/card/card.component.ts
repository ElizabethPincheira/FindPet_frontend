import { Component, Input, ViewChild } from '@angular/core';
import { Mascota } from '../../services/mascotas/mascotas.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PublicacionesService } from '../../services/publicaciones/publicaciones.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() mascota!: Mascota;
  @ViewChild('reporteForm') publicacionForm!: NgForm;

  publicacion = {
    titulo: '',
    descripcion: '',
    estado: '',
    region: '',
    comuna: ''
  };

  constructor(private publicacionesService: PublicacionesService) {}

  async guardarPublicacion(){
    try {
      if (this.publicacionForm && this.publicacionForm.valid) {
        const datosPublicacion = {
          ...this.publicacion,
          mascota_id: this.mascota.mascota_id
        };

        await this.publicacionesService.crearPublicacion(datosPublicacion);
        console.log('Publicación guardada para la mascota:', this.mascota.mascota_id);
        
        // Limpiar formulario
        this.publicacionForm.resetForm();
        this.publicacion = {
          titulo: '',
          descripcion: '',
          estado: '',
          region: '',
          comuna: ''
        };

        // Cerrar modal
        const modal = document.getElementById('modalPublicacion');
        if (modal) {
          const bsModal = new (window as any).bootstrap.Modal(modal);
          bsModal.hide();
        }
      }
    } catch (error) {
      console.error('Error al guardar publicación:', error);
    }
  }
}
