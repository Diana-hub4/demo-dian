import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nube.component.html',
  styleUrls: ['./nube.component.css'],
})
export class NubeComponent {
  acceder(): void {
    console.log('Acceder a la nube');
    // Lógica para acceder a la nube
  }

  cargar(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        console.log('Archivo seleccionado:', file.name);
        // Lógica para subir el archivo a la nube
      }
    };
    input.click();
  }

  verificar(): void {
    console.log('Verificar archivos en la nube');
    // Lógica para verificar archivos
  }
}