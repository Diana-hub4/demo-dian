import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-documento-soporte',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './crear-documento-soporte.component.html',
  styleUrls: ['../acciones/acciones.component.css'], // Importa el archivo CSS común
})
export class CrearDocumentoSoporteComponent {}