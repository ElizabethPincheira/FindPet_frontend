import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MascotasComponent } from '../mascotas/mascotas.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  standalone: true,
  imports: [FormsModule, MascotasComponent],
})
export class PerfilComponent {

  nombreUsuario = 'Elizabeth';

  mascota = {
    nombre: '',
    tipo_mascota: '',
    descripcion: '',
    raza: '',
    color: '',
    numero_chip: ''
  };

  reporte = {
    titulo: '',
    descripcion: '',
    estado: '',
    region: '',
    comuna: ''
  };

  guardarMascota() {
    console.log('Mascota:', this.mascota);
    // aquí luego llamas al servicio
  }

  guardarReporte() {
    console.log('Reporte:', this.reporte);
  }
}
