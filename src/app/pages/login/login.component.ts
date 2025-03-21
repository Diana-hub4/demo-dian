import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  mostrarTerminos: boolean = false;
  showForgotPassword: boolean = false; // Controla la visibilidad del formulario de recuperación
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, // Inyecta Router
    private http: HttpClient
  ) {
    // Formulario de inicio de sesión
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    // Formulario de recuperación de contraseña
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]], // Validación para 10 dígitos
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      const url = `${environment.url}/login`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(url, loginData, { headers }).subscribe({
        next: (response: any) => {
          console.log('Inicio de sesión exitoso:', response);
          // Redirigir al usuario a la página correspondiente
          this.router.navigate(['/portal-contador']);
        },
        error: (error) => {
          console.error('Error en el inicio de sesión:', error);
          alert('Correo electrónico o contraseña incorrectos');
        }
      });
    }
  }
  
  onForgotPassword(): void {
    this.showForgotPassword = true; // Muestra el formulario de recuperación
  }

  onForgotPasswordSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      const phone = this.forgotPasswordForm.value.phone;
      console.log('Solicitud de recuperación:', { email, phone });
    }
  }

  onBack(): void {
    this.showForgotPassword = false; // Oculta el formulario de recuperación
  }

  goToRegister(): void {
    console.log('Ir a registro');
    // Redirige a la vista de crear cuenta
    this.router.navigate(['/register']);
  }
}