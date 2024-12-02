import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css']
})
export class PerfilesComponent {
  perfiles = [
    {
      nombre: 'Juan Pérez',
      actividad: 'Ciclismo',
      ubicacion: 'Santiago, Chile',
      descripcion: 'Aficionado al ciclismo urbano y siempre buscando nuevos compañeros de ruta.',
      imagen: 'assets/juan.jpg'
    },
    {
      nombre: 'María Gómez',
      actividad: 'Yoga',
      ubicacion: 'Buenos Aires, Argentina',
      descripcion: 'Amante del yoga al aire libre, enfocada en meditación y relajación.',
      imagen: 'assets/maria.png'
    },
    {
      nombre: 'Carlos Rivera',
      actividad: 'Entrenamiento en gimnasio',
      ubicacion: 'Ciudad de México, México',
      descripcion: 'Fanático del entrenamiento de fuerza y en constante búsqueda de retos.',
      imagen: 'assets/carlos.jpg'
    }
  ];
}
