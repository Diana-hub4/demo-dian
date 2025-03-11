import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
})
export class AyudaComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  // Regresar a la vista anterior
  goBack(): void {
    this.router.navigate(['/portal-contador']);
  }

  // Redirigir a Preguntas Frecuentes
  goToFaq(): void {
    this.router.navigate(['/preguntas-frecuentes']);
  }

  // Descargar la guía de acceso
  downloadGuide(): void {
    window.open('/assets/manual-usuario.pdf', '_blank');
  }

  // Redirigir a Capacitaciones
  goToTutorials(): void {
    this.router.navigate(['/capacitaciones']);
  }

  // Redirigir a PQRSF
  goToPqrsf(): void {
    this.router.navigate(['/pqrsf']);
  }

  // Abrir WhatsApp
  openWhatsApp(): void {
    window.open('https://wa.me/5731234567890', '_blank');
  }
}