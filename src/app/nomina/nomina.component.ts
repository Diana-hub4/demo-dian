import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nomina',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css'],
})
export class NominaComponent {
  // Propiedades del plan del cliente y nóminas
  planCliente: string = 'gratuito'; // Puede ser 'gratuito', 'plus', 'pro', 'premium'
  nominasUsadas: number = 1; // Número de nóminas usadas (simulado)

  // Límites de nóminas según el plan
  limitesNominas: { [key: string]: number } = {
    gratuito: 10,
    plus: 25,
    pro: 50,
    premium: 100,
  };

  // Propiedades utilizadas en el HTML
  totalBruto: number = 1000; // Valor inicial del total bruto
  deducciones: number = 100; // Valor inicial de las deducciones
  aportes: number = 50; // Valor inicial de los aportes
  totalNeto: number = 850; // Valor inicial del total neto

  // Métodos utilizados en el HTML
  cancelar() {
    console.log('Cancelar nómina');
  }

  guardar() {
    console.log('Guardar nómina');
  }

  enviar() {
    console.log('Enviar nómina');
  }

  agregarFormaPago() {
    console.log('Agregar forma de pago');
  }

  // Obtener el límite de nóminas según el plan
  get limiteNominas(): number {
    return this.limitesNominas[this.planCliente];
  }
}