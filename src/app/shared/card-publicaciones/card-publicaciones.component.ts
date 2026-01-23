import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-publicaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-publicaciones.component.html',
  styleUrl: './card-publicaciones.component.css'
})
export class CardPublicacionesComponent {

  @Input() publicacion: any;
  @Input() mascota: any;

  getBadgeClass(estado: string): string {
    switch(estado) {
      case 'Perdida':
        return 'bg-danger';
      case 'Robada':
        return 'bg-warning text-dark';
      case 'Adopcion':
        return 'bg-success';
      default:
        return 'bg-secondary';
    }
  }
}

