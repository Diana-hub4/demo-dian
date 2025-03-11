import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient // Inyecta HttpClient
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      const nombre = 'Usuario'; // Nombre quemado
      const enlaceRecuperacion = 'https://tuempresa.com/reset-password'; // Enlace quemado

      this.http.post('http://localhost:3000/send-email', { email, nombre, enlaceRecuperacion })
        .subscribe({
          next: (response) => {
            console.log('Correo enviado:', response);
            alert('Se ha enviado un correo para restablecer tu contraseña.');
          },
          error: (error) => {
            console.error('Error al enviar el correo:', error);
            alert('Hubo un error al enviar el correo. Por favor, intenta nuevamente.');
          },
        });
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
} 