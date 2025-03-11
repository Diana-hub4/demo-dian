import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Importaciones de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,         // Módulo para mat-card
    MatFormFieldModule,    // Módulo para mat-form-field
    MatInputModule,        // Módulo para mat-input
    MatIconModule,         // Módulo para mat-icon
    MatButtonModule        // Módulo para mat-button
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      cedula: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]], // Contraseña con mínimo 6 caracteres
      cargo: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      console.log('Datos del usuario:', userData);
      this.saveUserData(userData);
      this.router.navigate(['/login']);
    } else {
      console.log('Formulario inválido');
      alert('Por favor, completa el formulario correctamente');
    }
  }

  saveUserData(userData: any): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Usuario guardado en localStorage:', userData);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}