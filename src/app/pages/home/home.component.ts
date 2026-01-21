import { Component } from '@angular/core';
import { FiltrosComponent } from '../../shared/filtros/filtros.component';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, FiltrosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
