import { Component } from '@angular/core';

@Component({
  selector: 'app-envio',
  standalone: true,
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css'],
})
export class EnvioComponent {
  // Datos de ejemplo para la tabla
  facturas = [
    {
      empresa: 'Empresa A',
      nit: '123456789',
      estado: 'Activo',
      plan: 'Pro',
      correo: 'empresaA@example.com',
    },
    {
      empresa: 'Empresa B',
      nit: '987654321',
      estado: 'Inactivo',
      plan: 'Gratuito',
      correo: 'empresaB@example.com',
    },
    // Agrega más datos según sea necesario
  ];

  // Método para buscar cliente o factura
  buscar(query: string): void {
    if (query) {
      // Lógica de búsqueda
      console.log('Buscando:', query);
      // Aquí podrías filtrar la lista de facturas o hacer una llamada a una API
    }
  }

  // Método para enviar factura
  enviarFactura(correo: string, factura: any): void {
    console.log('Enviando factura a:', correo);
    console.log('Factura:', factura);
    // Aquí podrías hacer una llamada a una API para enviar la factura
  }

 
  // Método para calcular el estado
  calcularEstado(facturasUltimos3Meses: number): string {
    if (facturasUltimos3Meses < 10) {
      return 'Inactivo';
    } else if (facturasUltimos3Meses > 15) {
      return 'Activo';
    } else {
      return 'Regular';
    }
  }}