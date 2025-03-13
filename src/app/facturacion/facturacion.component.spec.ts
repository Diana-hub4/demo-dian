import { Component } from '@angular/core';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent {
  // Datos del cliente (simulados)
  planCliente: string = 'gratuito'; // Puede ser 'gratuito', 'plus', 'pro', 'premium'
  facturasUsadas: number = 1; // Número de facturas usadas (simulado)

  // Propiedades para el desglose de valores
  totalBruto: number = 1000; // Ejemplo: Valor inicial
  descuentos: number = 100; // Ejemplo: Valor inicial
  subtotal: number = this.totalBruto - this.descuentos;
  retefuente: number = this.subtotal * 0.01; // 1% de Retefuente
  retelCA: number = 50; // Ejemplo: Valor inicial
  copagoAnticipo: number = 200; // Ejemplo: Valor inicial
  totalNeto: number = this.subtotal - this.retefuente - this.retelCA - this.copagoAnticipo;

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

  // Método para agregar formas de pago
  formasPago: any[] = []; // Array para almacenar las formas de pago

  agregarFormaPago(): void {
    const nuevaFormaPago = {
      tipo: 'Efectivo', // Valor por defecto
      monto: 0
    };
    this.formasPago.push(nuevaFormaPago);
    console.log('Nueva forma de pago agregada:', nuevaFormaPago);
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

  // Método para cancelar
  cancelar(): void {
    alert('Operación cancelada');
    // Aquí puedes agregar la lógica para limpiar el formulario
  }

  // Método para guardar
  guardar(): void {
    alert('Factura guardada');
    // Aquí puedes agregar la lógica para guardar la factura
  }

  // Método para enviar
  enviar(): void {
    alert('Factura enviada');
    // Aquí puedes agregar la lógica para enviar la factura
  }
}