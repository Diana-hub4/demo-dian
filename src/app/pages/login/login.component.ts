import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';

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

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  forgotPasswordForm!: FormGroup;
  showForgotPassword = false;
  mostrarTerminos = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      return;
    }
      const credentials = {
        email: this.loginForm.value.username, // Cambiado a 'email' para coincidir con backend
        password: this.loginForm.value.password
      };

      this.authService.login(credentials).subscribe({
        next: (response) => {
          this.router.navigate(['/portal-contador']);
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('Credenciales incorrectas. Por favor intente nuevamente.');
        }
      });
    }
  
  private handleLoginSuccess(response: any): void {
    // Redirección según rol de usuario
    if (response.user?.role === 'accountant') {
      this.router.navigate(['/portal-contador']);
    } else if (response.user?.role === 'client') {
      this.router.navigate(['/portal-cliente']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  togglePasswordRecovery(): void {
    this.showForgotPassword = !this.showForgotPassword;
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  async onForgotPasswordSubmit(): Promise<void> {
    if (this.forgotPasswordForm.valid) {
      return;
    }
      try {
        const response = await this.authService.forgotPassword(
          this.forgotPasswordForm.value.email,
          this.forgotPasswordForm.value.phone
        );
        alert('Instrucciones enviadas a tu correo');
        this.showForgotPassword = false;
      } catch (error) {
        console.error('Error:', error);
        alert('Error al procesar la solicitud');
      }
    }
  
  onForgotPassword() {
    // Implementación básica si necesitas otra forma de manejar esto
    this.togglePasswordRecovery();
  }
}