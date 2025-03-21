import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-documentos-soporte',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './documentos-soporte.component.html',
  styleUrls: ['./documentos-soporte.component.css'],
})
export class DocumentosSoporteComponent {
  // Propiedades utilizadas en el HTML
  totalBruto: number = 1000; // Valor inicial del total bruto
  descuentos: number = 100; // Valor inicial de los descuentos
  totalNeto: number = 900; // Valor inicial del total neto

  // Métodos utilizados en el HTML
  cancelar() {
    console.log('Cancelar documento soporte');
  }

  guardar() {
    console.log('Guardar documento soporte');
  }

  agregarFormaPago() {
    console.log('Agregar forma de pago');
  }
}