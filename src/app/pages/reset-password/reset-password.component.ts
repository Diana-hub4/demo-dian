import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  FormGroup, 
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn 
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Validador personalizado para coincidencia de contraseñas
export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    return password && confirmPassword && password === confirmPassword 
      ? null 
      : { passwordMismatch: true };
  };
}

@Component({
  selector: 'app-reset-password',
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
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  tokenFromUrl?: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    // Obtener token de la URL si existe
    this.route.queryParams.subscribe(params => {
      this.tokenFromUrl = params['token'];
    });

    this.resetPasswordForm = this.fb.group({
      token: [this.tokenFromUrl || '', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator() });
  }

  goToLogin() {
    this.router.navigate(['/login']); // o la ruta que uses para login
  }
  
  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      const { token, newPassword } = this.resetPasswordForm.value;
      
      this.http.post('http://localhost:8000/reset-password', { token, newPassword })
        .subscribe({
          next: (response) => {
            console.log('Contraseña actualizada:', response);
            alert('Tu contraseña ha sido restablecida exitosamente. Ahora puedes iniciar sesión.');
            this.router.navigate(['/login']);
          },
          error: (error) => {
            console.error('Error al restablecer contraseña:', error);
            alert(error.error?.detail || 'Hubo un error al restablecer la contraseña. Verifica el token e intenta nuevamente.');
          }
        });
    }
  }
}