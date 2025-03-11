import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-pqrsf',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade los módulos aquí
  templateUrl: './pqrsf.component.html',
  styleUrls: ['./pqrsf.component.css'],
})
export class PqrsfComponent {
  tipoPqrsf: string = 'peticion'; // Valor por defecto
  mensaje: string = '';

  constructor(private router: Router) {}

  enviarPqrsf() {
    // Aquí puedes implementar la lógica para enviar el PQRSF (por ejemplo, a un servicio)
    console.log('Tipo de PQRSF:', this.tipoPqrsf);
    console.log('Mensaje:', this.mensaje);

    // Redirigir a la página de confirmación
    this.router.navigate(['/confirmacion-pqrsf']);
  }
}
