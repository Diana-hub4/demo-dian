import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
})
export class ProveedoresComponent {
  // Métodos utilizados en el HTML
  cancelar() {
    console.log('Cancelar proveedor');
  }

  guardar() {
    console.log('Guardar proveedor');
  }
}