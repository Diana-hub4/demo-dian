import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-portal-contador',
  templateUrl: './portal-contador.component.html',
  styleUrls: ['./portal-contador.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class PortalContadorComponent {
  // Datos originales
  clients = [
    { empresa: 'maria', nit: '0001', cedula: '10001000', plan: 'basico', estado: 'activo' },
    { empresa: 'jose', nit: '0002', cedula: '10001001', plan: 'plus', estado: 'inactivo' },
    { empresa: 'monica', nit: '0003', cedula: '10001002', plan: 'pro', estado: 'activo' },
    { empresa: 'blue', nit: '0004', cedula: '10001003', plan: 'gratuito', estado: 'activo' },
    { empresa: 'redmax', nit: '0005', cedula: '10001004', plan: 'pro', estado: 'activo' },
    { empresa: 'camila', nit: '0006', cedula: '10001005', plan: 'plus', estado: 'inactivo' },
    { empresa: 'diana', nit: '0007', cedula: '10001006', plan: 'pro', estado: 'activo' },
    { empresa: 'mariposa', nit: '0008', cedula: '10001007', plan: 'gratuito', estado: 'activo' },
    { empresa: 'bosa', nit: '0009', cedula: '10001008', plan: 'plus', estado: 'activo' },
    { empresa: 'junio', nit: '0010', cedula: '10001009', plan: 'pro', estado: 'inactivo' },
    { empresa: 'agosto', nit: '0011', cedula: '10001010', plan: 'pro', estado: 'activo' },
    { empresa: 'mama', nit: '0013', cedula: '10001011', plan: 'plus', estado: 'activo' },
    { empresa: 'papa', nit: '0014', cedula: '10001012', plan: 'plus', estado: 'inactivo' },
    { empresa: 'gordito', nit: '0015', cedula: '10001013', plan: 'pro', estado: 'activo' },
    { empresa: 'guapo', nit: '0016', cedula: '10001014', plan: 'gratuito', estado: 'inactivo' },
  ];
  // Método para ir a la página de inicio
  goToHome(): void {
    this.router.navigate(['/inicio']);
  }

  // Método para ir a la página de contabilidad
  goToAccounting(): void {
    this.router.navigate(['/contabilidad']);
  }

  // Método para ir a la página de reportes
  goToReports(): void {
    this.router.navigate(['/reportes']);
  }

  // Método para ir a la página de alianzas
  goToAlliances(): void {
    this.router.navigate(['/alianzas']);
  }
  // Datos filtrados
  filteredClients = [...this.clients];

  // Configuración de la tabla
  displayedColumns: string[] = ['empresa', 'nit', 'cedula', 'plan', 'estado', 'acciones'];
  dataSource = new MatTableDataSource(this.filteredClients);
  pageSize = 10;
  pageSizeOptions = [10, 20, 50];
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Redirigir a la página de ayuda
  goToHelp(): void {
    this.router.navigate(['/ayuda']);
  }

  // Filtrar clientes según el término de búsqueda
  searchClients(): void {
    if (this.searchTerm) {
      this.filteredClients = this.clients.filter(
        (client) =>
          client.empresa.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          client.nit.includes(this.searchTerm) ||
          client.cedula.includes(this.searchTerm)
      );
    } else {
      this.filteredClients = [...this.clients];
    }
    this.dataSource.data = this.filteredClients;
  }

  // Cerrar sesión
  logout(): void {
    console.log('Sesión cerrada');
    this.router.navigate(['/login']);
  }

  // Acciones para clientes
  createElectronicInvoice(client: any): void {
    console.log('Facturación electrónica para:', client);
    this.router.navigate(['/facturacion']);
  }

  createElectronicPayroll(client: any): void {
    console.log('Nómina electrónica para:', client);
    this.router.navigate(['/crear-nomina-electronica']);
  }

  createSupportDocument(client: any): void {
    console.log('Documento soporte para:', client);
    this.router.navigate(['/crear-documento-soporte']);
  }

  viewClientDetails(client: any): void {
    console.log('Acceso a la información completa de:', client);
    this.router.navigate(['/acceso-informacion-completa']);
  }

  // Método para manejar el cambio de página
  onPageChange(event: PageEvent): void {
    console.log('Evento de paginación:', event);
  }
    // Función para redirigir a la vista de facturación
  irAFacturacion(): void {
    this.router.navigate(['/facturacion']);
  }
}

