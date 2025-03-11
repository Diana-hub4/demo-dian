import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según tu estructura de carpetas

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  loginForm: FormGroup;
  credentials = {
    email: '',
    password: '',
  };

  // Datos quemados para validar el inicio de sesión
  validUser = {
    email: 'admin@example.com',
    password: 'admin123',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.credentials.email = this.loginForm.value.email;
      this.credentials.password = this.loginForm.value.password;

      console.log('Credenciales ingresadas:', this.credentials);
      console.log('Credenciales válidas:', this.validUser);

      // Primero, intenta autenticar con los datos quemados
      if (
        this.credentials.email === this.validUser.email &&
        this.credentials.password === this.validUser.password
      ) {
        console.log('Inicio de sesión exitoso (datos quemados)');
        this.router.navigate(['/portal-contador']); // Redirigir al portal contador
      } else {
        // Si no coincide con los datos quemados, intenta autenticar con los usuarios registrados
        this.authService.login(this.credentials.email, this.credentials.password).subscribe(
          (response) => {
            if (response.success) {
              console.log('Inicio de sesión exitoso (usuario registrado)');
              this.router.navigate(['/portal-contador']); // Redirige al portal del contador
            } else {
              console.error('Error al iniciar sesión:', response.message);
              alert('Correo electrónico o contraseña incorrectos'); // Mostrar mensaje de error
            }
          },
          (error) => {
            console.error('Error al iniciar sesión:', error);
          }
        );
      }
    } else {
      console.log('Formulario inválido');
      alert('Por favor, completa el formulario correctamente'); // Mostrar mensaje de error
    }
  }

  onForgotPassword(): void {
    if (this.email) {
      this.authService.forgotPassword(this.email).subscribe({
        next: (response: any) => {
          alert(response.message);
        },
        error: (error: any) => {
          alert('Error al enviar el correo. Inténtalo de nuevo.');
        },
      });
    } else {
      alert('Por favor, ingresa tu correo electrónico.');
    }
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}