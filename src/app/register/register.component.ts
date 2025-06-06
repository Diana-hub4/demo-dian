//src/app/register/register.component.ts
import { Component, inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

// Importaciones de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule, 
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
  private baseUrl: string = environment.apiUrl;
  
  registerForm: FormGroup;
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      cedula: ['', Validators.required],
      cargo: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8), 
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  // Validador personalizado para coincidencia de contraseñas
  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  async onSubmit(): Promise<void> {
    if (this.registerForm.valid) {
      const userData = {
        id: crypto.randomUUID(), // Genera un UUID en frontend (opcional, si el backend lo genera omítelo)
        name: this.registerForm.get('nombre')?.value,
        last_name: this.registerForm.get('apellido')?.value,
        role: this.registerForm.get('cargo')?.value,
        identification_number: this.registerForm.get('cedula')?.value,
        email: this.registerForm.get('email')?.value,
        permissions: 'client', // Valor por defecto
        password: this.registerForm.get('password')?.value,
        status:'inactivo'
      };
      console.log('Datos del usuario:', userData);
      console.log('Formulario válido', this.registerForm.value);
      try {
        await this.saveUserData(userData);
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      } catch (error) {
        console.error('Error al guardar el usuario:', error);
        alert('Ocurrió un error al guardar el usuario');
      }
    } else {
      console.log('Formulario inválido');
      alert('Por favor, completa el formulario correctamente');
    }
  }

  async saveUserData(userData: any): Promise<void> {   
    const url = `${this.baseUrl}/users/`; // http://localhost:8000/register/
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('URL:', url);
    console.log('Headers:', headers);
    console.log('Body:', userData);
    await this.http.post(url, userData, { headers }).toPromise();
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Método para permitir solo números en el campo de cédula
  onCedulaInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    input.value = value.replace(/[^0-9]/g, ''); // Elimina todo lo que no sea número
    this.registerForm.get('cedula')?.setValue(input.value); // Actualiza el valor en el formulario
  }
}