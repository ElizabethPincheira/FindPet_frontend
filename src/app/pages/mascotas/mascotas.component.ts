import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { FiltrosComponent } from '../../shared/filtros/filtros.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-mascotas',
  imports: [BannerComponent,FiltrosComponent,CardComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {

}
