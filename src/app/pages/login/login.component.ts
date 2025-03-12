import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Router } from '@angular/router'; // Importa Router

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
  mostrarTerminos: boolean = false; // Define la propiedad aquí
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router // Inyecta Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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
    console.log('Olvidé mi contraseña');
    // Lógica para recuperar contraseña
  }

  goToRegister(): void {
    console.log('Ir a registro');
    // Redirige a la vista de crear cuenta
    this.router.navigate(['/register']);
  }
}