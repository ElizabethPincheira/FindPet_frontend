import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { FiltrosComponent } from '../../shared/filtros/filtros.component';

@Component({
  selector: 'app-mascotas',
  imports: [BannerComponent,FiltrosComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent {

}
