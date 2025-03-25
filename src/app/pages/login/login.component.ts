import { Component, inject   } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';

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
  private baseUrl: string = environment.url;

  mostrarTerminos: boolean = false;
  showForgotPassword: boolean = false; // Controla la visibilidad del formulario de recuperación
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor(
    private fb: FormBuilder
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

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      console.log('Formulario enviado:', this.loginForm.value);
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }; 
      console.log('Datos del login:', loginData);
      try {
        await this.validateLogin(loginData);
        alert('Usuario logeado con éxito');
        this.router.navigate(['/portal-contador']);
      } catch (error) {
        console.error('Error al logear el usuario:', error);
        alert('Ocurrió un error al logear el usuario');
      }
    }
  }

  async validateLogin(loginData: any): Promise<void> {   
    const url = `${this.baseUrl}/login`; // http://localhost:8000/users/
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('URL:', url);
    console.log('Headers:', headers);
    await this.http.post(url, loginData, { headers }).toPromise();
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