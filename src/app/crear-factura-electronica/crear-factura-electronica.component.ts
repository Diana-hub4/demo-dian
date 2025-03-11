import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';

// Definir un tipo o interfaz para el cliente
interface Cliente {
  empresa: string;
  nit: string;
  cedula: string;
  plan: string;
  estado: string;
  correo: string;
  telefono: string;
  fechaElaboracion: Date;
}

@Component({
  selector: 'app-crear-factura-electronica',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './crear-factura-electronica.component.html',
  styleUrls: ['./crear-factura-electronica.component.css'],
})
export class CrearFacturaElectronicaComponent {
  tipoFacturacion: 'xml' | 'cufe' | 'qr' | 'firma' = 'xml';
  cliente = { plan: 'gratuito' };
  facturasUsadas: number = 1;
  limiteFacturas: number = 10;
  contadorFacturas: string = '';
  clients: Cliente[] = [
    { empresa: 'maria', nit: '0001', cedula: '10001000', plan: 'basico', estado: 'activo', correo: 'maria@example.com', telefono: '123456789', fechaElaboracion: new Date() },
    { empresa: 'jose', nit: '0002', cedula: '10001001', plan: 'plus', estado: 'inactivo', correo: 'jose@example.com', telefono: '987654321', fechaElaboracion: new Date() },
  ];

  clienteSeleccionado: Cliente | null = null;
  mostrarFormularioCreacion: boolean = false;
  searchTerm: string = '';
  correoElectronico: string = '';
  numeroTelefono: string = '';
  fechaElaboracion: Date = new Date();

  nuevoCliente: Cliente = {
    empresa: '',
    nit: '',
    cedula: '',
    plan: 'gratuito',
    estado: 'activo',
    correo: '',
    telefono: '',
    fechaElaboracion: new Date(),
  };

  constructor(private router: Router) {
    this.actualizarLimiteFacturas();
  }

  actualizarLimiteFacturas(): void {
    const planes: { [key: string]: number } = {
      gratuito: 10,
      plus: 50,
      pro: 100,
      premium: 500,
    };
    this.limiteFacturas = planes[this.cliente.plan] || 10;
    this.actualizarContadorFacturas();
  }

  actualizarContadorFacturas(): void {
    this.contadorFacturas = `Tus facturas usadas son ${this.facturasUsadas} de ${this.limiteFacturas}`;
  }

  crearFactura(): void {
    if (this.facturasUsadas < this.limiteFacturas) {
      this.facturasUsadas++;
      this.actualizarContadorFacturas();
      console.log('Factura creada');
    } else {
      console.log('Límite de facturas alcanzado');
    }
  }

  buscarCliente(): void {
    this.clienteSeleccionado = this.clients.find(
      (client) =>
        client.empresa.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        client.nit.includes(this.searchTerm) ||
        client.cedula.includes(this.searchTerm)
    ) || null;

    this.mostrarFormularioCreacion = !this.clienteSeleccionado;
  }

  mostrarFormulario(): void {
    this.mostrarFormularioCreacion = true;
  }

  crearCliente(): void {
    this.clients.push({ ...this.nuevoCliente });
    this.clienteSeleccionado = this.nuevoCliente;
    this.mostrarFormularioCreacion = false;
    this.limpiarFormulario();
  }

  guardar(): void {
    console.log('Factura guardada:', {
      cliente: this.clienteSeleccionado,
      correoElectronico: this.correoElectronico,
      numeroTelefono: this.numeroTelefono,
      fechaElaboracion: this.fechaElaboracion,
    });
    alert('Factura guardada correctamente');
  }

  guardarYEnviar(): void {
    this.guardar();
    console.log('Enviando factura por correo:', {
      cliente: this.clienteSeleccionado,
      correoElectronico: this.correoElectronico,
      numeroTelefono: this.numeroTelefono,
      fechaElaboracion: this.fechaElaboracion,
    });
    alert('Factura guardada y enviada por correo');
  }

  cancelar(): void {
    this.limpiarFormulario();
    console.log('Formulario cancelado y campos limpiados');
  }

  private limpiarFormulario(): void {
    this.nuevoCliente = {
      empresa: '',
      nit: '',
      cedula: '',
      plan: 'gratuito',
      estado: 'activo',
      correo: '',
      telefono: '',
      fechaElaboracion: new Date(),
    };
    this.correoElectronico = '';
    this.numeroTelefono = '';
    this.fechaElaboracion = new Date();
  }
}