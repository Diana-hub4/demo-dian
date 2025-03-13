import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './clientes.component.HTML',
  styleUrls: ['./clientes.component.css'],
})
export class ProveedoresComponent {
  // Métodos utilizados en el HTML
  cancelar() {
    console.log('Cancelar cliente');
  }

  guardar() {
    console.log('Guardar cliente');
  }
}