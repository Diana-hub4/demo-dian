import { Component, inject   } from '@angular/core';
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
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule  } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service'; // Ajusta la ruta
import { OnInit } from '@angular/core'; 

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
  baseUrl = 'http://localhost:8000'; // O usa environment.url
  mostrarTerminos = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],  // Cambiado de email a username
      password: ['', Validators.required]
    });
    this.router.navigate(['/portal-cliente']); 

    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  onSubmit(): void {
this.authService.login(
  this.loginForm.value.username,  // Cambiado de email a username
  this.loginForm.value.password
)
  }

  onForgotPassword(): void {
    this.showForgotPassword = true; // Muestra el formulario de recuperación
  }

  onBack(): void {
    this.showForgotPassword = false; // Oculta el formulario de recuperación
  }

  goToRegister(): void {
    console.log('Ir a registro');
    // Redirige a la vista de crear cuenta
    this.router.navigate(['/register']);
  }
  
  async onForgotPasswordSubmit(): Promise<void> {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      const phone = this.forgotPasswordForm.value.phone;
      
      try {
        const response = await this.sendForgotPasswordRequest(email, phone);
        alert(response.message); // Muestra el mensaje del backend
        this.showForgotPassword = false; // Oculta el formulario después del envío
      } catch (error) {
        console.error('Error al solicitar recuperación:', error);
        alert('Se produjo un error al procesar tu solicitud');
      }
    }
  }

  private async sendForgotPasswordRequest(email: string, phone: string): Promise<any> {
    const url = `${this.baseUrl}/forgot-password`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, phone }; // Asegúrate que coincida con ForgotPasswordRequest en el backend
    
    return this.http.post(url, body, { headers }).toPromise();
  }

}


