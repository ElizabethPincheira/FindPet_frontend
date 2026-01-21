import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { Mascota, MascotasService } from '../../services/mascotas/mascotas.service';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent implements OnInit {

  mascotas: Mascota[] = [];

  constructor(private mascotasService: MascotasService) { }

  ngOnInit(): void {
    this.cargarMascotas();
  }

  async cargarMascotas() {
    this.mascotas = await this.mascotasService.obtenerMisMascotas()
    console.log(this.mascotas)
  }
}
