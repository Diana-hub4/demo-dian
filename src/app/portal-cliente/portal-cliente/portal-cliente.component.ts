import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturacionComponent } from 'app/facturacion/facturacion.component';
import { DocumentosSoporteComponent } from 'app/documentos-soporte/documentos-soporte.component';
import { NominaComponent } from 'app/nomina/nomina.component';
import { ProveedoresComponent } from 'app/proveedores/proveedores.component';
import { ClientesComponent } from 'app/clientes/clientes.component';
import { EnvioComponent } from 'app/envio/envio.component';
import { NubeComponent } from 'app/nube/nube.component';

@Component({
  selector: 'app-portal-cliente',
  standalone: true,
  imports: [
    CommonModule,
    FacturacionComponent,
    DocumentosSoporteComponent,
    NominaComponent,
    ProveedoresComponent,
    ClientesComponent,
    EnvioComponent,
    NubeComponent,
  ],
  templateUrl: './portal-cliente.component.html',
  styleUrls: ['./portal-cliente.component.css'],
})
export class PortalClienteComponent {
  seccionActual: string = 'facturacion'; // Sección inicial

  // Método para cambiar la sección activa
  mostrarSeccion(seccion: string): void {
    this.seccionActual = seccion;
  }
}