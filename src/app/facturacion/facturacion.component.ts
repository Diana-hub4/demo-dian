import { Component } from '@angular/core';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
})
export class FacturacionComponent {
  // Datos del cliente (simulados)
  planCliente: string = 'gratuito'; // Puede ser 'gratuito', 'plus', 'pro', 'premium'
  facturasUsadas: number = 1; // Número de facturas usadas (simulado)

  // Límites de facturas según el plan
  limitesFacturas: { [key: string]: number } = {
    gratuito: 10,
    plus: 25,
    pro: 50,
    premium: 100,
  };

  // Obtener el límite de facturas según el plan
  get limiteFacturas(): number {
    return this.limitesFacturas[this.planCliente];
  }

  // Función para generar una factura
  generarFactura(): void {
    if (this.facturasUsadas < this.limiteFacturas) {
      this.facturasUsadas++;
      console.log('Factura generada.');
    } else {
      console.log('Ha alcanzado el límite de facturas para su plan.');
    }
  }
}