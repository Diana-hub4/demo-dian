import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select'; // Importar MatSelectModule
import { MatSnackBar } from '@angular/material/snack-bar';
import { PqrsfService } from '../services/pqrsf.service';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule, 
  ],
})
export class AyudaComponent {
removeFile(_t101: number) {
throw new Error('Method not implemented.');
}
  searchTerm: string = '';
  pqrsfType: string = '';
  pqrsfMessage: string = '';
  selectedFiles: File[] = [];

  faqItems = [
    { question: '¿Cómo puedo registrar un nuevo proveedor en el sistema?', answer: 'Para registrar un nuevo proveedor, diríjase a la sección de proveedores y complete el formulario correspondiente.' },
    { question: '¿Cómo genero una factura electrónica?', answer: 'Puede generar una factura electrónica desde la sección de facturación, seleccionando la opción "Generar Factura".' },
    { question: '¿Qué hago si un documento no se sube correctamente a la nube?', answer: 'Verifique su conexión a internet y vuelva a intentarlo. Si el problema persiste, contacte a soporte.' },
    { question: '¿Cómo registro un pago de nómina?', answer: 'Diríjase a la sección de nóminas y seleccione la opción "Registrar Pago".' },
    { question: '¿Puedo acceder a mi información desde cualquier dispositivo?', answer: 'Sí, puede acceder a su información desde cualquier dispositivo con conexión a internet.' },
    { question: '¿Cómo gestiono las retenciones en la fuente?', answer: 'Las retenciones en la fuente se gestionan desde la sección de impuestos.' },
    { question: '¿Qué debo hacer si olvido mi contraseña?', answer: 'Puede restablecer su contraseña utilizando la opción "Olvidé mi contraseña" en la página de login.' }
  ];
downloading: any;

constructor(
  private router: Router,
  private pqrsfService: PqrsfService,
  private snackBar: MatSnackBar
) {}

  // Regresar a la vista anterior
  goBack(): void {
    this.router.navigate(['/portal-contador']);
  }

  // Descargar la guía de acceso
  downloadGuide(): void {
    window.open('http://localhost:8000/descargar-guia', '_blank');
  }

  // Manejar la selección de archivos
  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > maxSize) {
        this.snackBar.open(`El archivo ${files[i].name} excede el tamaño máximo de 5MB`, 'Cerrar', {
          duration: 5000
        });
        continue;
      }
      this.selectedFiles.push(files[i]);
    }
    
    // Limpiar el input para permitir seleccionar el mismo archivo otra vez
    event.target.value = '';
  }
  
 
  // Abrir WhatsApp
  openWhatsApp(): void {
    window.open('https://wa.me/5731234567890', '_blank');
  }

  // Abrir correo electrónico
  openEmail(): void {
    window.location.href = 'mailto:soporte@sistemadecontabilidad.com';
  }
  // Enviar PQRSF
  submitPQRSF(): void {
    if (!this.pqrsfType || !this.pqrsfMessage) {
      this.snackBar.open('Por favor complete todos los campos requeridos', 'Cerrar', {
        duration: 3000
      });
      return;
    }

    this.pqrsfService.enviarPQRSF(
      this.pqrsfType,
      this.pqrsfMessage,
      Array.from(this.selectedFiles)
    ).subscribe({
      next: (response) => {
        this.snackBar.open('PQRSF enviada correctamente', 'Cerrar', {
          duration: 3000
        });
        this.resetPQRSFForm();
      },
      error: (err) => {
        console.error('Error al enviar PQRSF:', err);
        this.snackBar.open('Error al enviar PQRSF. Por favor intente nuevamente.', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }

  private resetPQRSFForm(): void {
    this.pqrsfType = '';
    this.pqrsfMessage = '';
    this.selectedFiles = [];
  }
}