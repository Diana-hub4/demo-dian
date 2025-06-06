import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatCardModule } from '@angular/material/card'; // Importa MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule

@Component({
  selector: 'app-change-password',
  standalone: true, // Si estás usando standalone components
  imports: [ // Usa imports: [ ... ] en lugar de imports { ... }
    FormsModule, // Importa FormsModule
    MatCardModule, // Importa MatCardModule
    MatFormFieldModule, // Importa MatFormFieldModule
    MatInputModule, // Importa MatInputModule
    MatButtonModule, // Importa MatButtonModule
  ],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'] // Usa styleUrls en lugar de styleUrlIs
})
export class ChangePasswordComponent {
  newPassword: string = '';

  onChangePassword(): void {
    if (this.newPassword) {
      // Aquí debes enviar la nueva contraseña al backend para actualizarla
      alert('Contraseña cambiada exitosamente.'); // Usa comillas simples
    } else {
      alert('Por favor, ingresa una nueva contraseña.'); // Usa comillas simples
    }
  }
}