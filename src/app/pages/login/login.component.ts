import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
    private router: Router // Inyecta Router
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
      console.log('Formulario enviado:', this.loginForm.value);
      // Redirige al Portal del Contador
      this.router.navigate(['/portal-contador']);
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

  goToRegister(): void {
    console.log('Ir a registro');
    // Redirige a la vista de crear cuenta
    this.router.navigate(['/register']);
  }
}