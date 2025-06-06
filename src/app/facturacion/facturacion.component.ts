import { CommonModule, CurrencyPipe  } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-facturacion',
  standalone: true, // Marca el componente como standalone
  imports: [CommonModule, MatButtonModule, CurrencyPipe], // Asegúrate de que CommonModule esté importado
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
})
export class FacturacionComponent {
  // Propiedades del plan del cliente y facturas
  planCliente: string = 'gratuito'; // Puede ser 'gratuito', 'plus', 'pro', 'premium'
  facturasUsadas: number = 1; // Número de facturas usadas (simulado)

  // Límites de facturas según el plan
  limitesFacturas: { [key: string]: number } = {
    gratuito: 10,
    plus: 25,
    pro: 50,
    premium: 100,
  };

  // Propiedades utilizadas en el HTML
  totalBruto: number = 1000; // Valor inicial del total bruto
  descuentos: number = 100; // Valor inicial de los descuentos
  subtotal: number = 900; // Valor inicial del subtotal
  retefuente: number = 50; // Valor inicial de la retefuente
  retelCA: number = 20; // Valor inicial de la retelCA
  copagoAnticipo: number = 30; // Valor inicial del copago/anticipo
  totalNeto: number = 800; // Valor inicial del total neto

  // Métodos utilizados en el HTML
  cancelar() {
    console.log('Cancelar factura');
    // Aquí puedes agregar la lógica para cancelar la factura
  }

  guardar() {
    console.log('Guardar factura');
    // Aquí puedes agregar la lógica para guardar la factura
  }

  enviar() {
    console.log('Enviar factura');
    // Aquí puedes agregar la lógica para enviar la factura
  }

  agregarFormaPago() {
    console.log('Agregar forma de pago');
    // Aquí puedes agregar la lógica para agregar una forma de pago
  }

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