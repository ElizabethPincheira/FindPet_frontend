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

  // ANY TAMBIEN ES TEMPORAL SOLO PARA MOSTRAR CARD EN EL FRONTEND
  @Input() mascota: any;


    //ESTO ES TEMPORAL HASTA CREAR LA TABLA FOTOGRAFIAS

  fotoDefault = 'assets/images/img_card.jpg';

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

