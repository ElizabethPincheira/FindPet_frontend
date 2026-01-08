import { Component, Input } from '@angular/core';
import { Mascota } from '../../services/mascotas/mascotas.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() mascota!: Mascota;
}
