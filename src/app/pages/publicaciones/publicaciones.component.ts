import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicacionesService, Publicacion } from '../../services/publicaciones/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  imports: [CommonModule, FormsModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css'
})
export class PublicacionesComponent implements OnInit {
  publicaciones: Publicacion[] = [];
  loading = false;
  error: string | null = null;

  constructor(private publicacionesService: PublicacionesService) {}

  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  async cargarPublicaciones(): Promise<void> {
    try {
      this.loading = true;
      this.error = null;
      this.publicaciones = await this.publicacionesService.obtenerPublicaciones();
    } catch (err: any) {
      this.error = 'Error al cargar las publicaciones';
      console.error('Error:', err);
    } finally {
      this.loading = false;
    }
  }

  async eliminarPublicacion(id: number | undefined): Promise<void> {
    if (!id) return;
    
    try {
      await this.publicacionesService.eliminarPublicacion(id);
      this.publicaciones = this.publicaciones.filter(p => p.publicacion_id !== id);
    } catch (err: any) {
      this.error = 'Error al eliminar la publicación';
      console.error('Error:', err);
    }
  }

  getStatusColor(estado: string): string {
    switch (estado) {
      case 'Perdida':
        return 'danger';
      case 'Robada':
        return 'warning';
      case 'Adopcion':
        return 'success';
      default:
        return 'secondary';
    }
  }
}
