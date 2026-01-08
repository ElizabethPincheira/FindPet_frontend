import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { FiltrosComponent } from '../../shared/filtros/filtros.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { Mascota, MascotasService } from '../../services/mascotas/mascotas.service';

@Component({
  selector: 'app-mascotas',
  imports: [CommonModule, BannerComponent, FiltrosComponent, CardComponent],
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
    this.mascotas = await this.mascotasService.obtenerMascotas()
    console.log(this.mascotas)
  }
}
