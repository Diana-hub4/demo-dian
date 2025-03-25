import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Ajusta esto según tu backend
  private users: any[] = []; // Array temporal para almacenar usuarios

  constructor(
    private http: HttpClient,
    private router: Router, // Inyecta Router para redirecciones
    @Inject(PLATFORM_ID) private platformId: Object // Inyecta PLATFORM_ID
  ) {
    if (this.isBrowser()) {
      const storedUsers = localStorage.getItem('registeredUsers');
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      }
    }
  }

  // Método para verificar si estamos en el navegador
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // Método para registrar usuario
  register(userData: any): Observable<any> {
    // Agregar nuevo usuario al array
    this.users.push(userData);

    // Guardar en localStorage solo si estamos en el navegador
    if (this.isBrowser()) {
      localStorage.setItem('registeredUsers', JSON.stringify(this.users));
    }

    // Simular respuesta del servidor y redirigir al login
    return of({ success: true, message: 'Usuario registrado exitosamente' }).pipe(
      tap(() => console.log('Usuario guardado'))
    );
  }

  // Método para login (nueva implementación)
  login(email: string, password: string): Observable<any> {
    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = users.find((u: any) => u.usuario === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user)); // Guarda el usuario en localStorage
      return of({ success: true, user });
    } else {
      return of({ success: false, message: 'Credenciales incorrectas' });
    }
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  // Método para obtener todos los usuarios (para futuras modificaciones)
  getUsers(): any[] {
    return this.users;
  }

  // Método para actualizar usuario
  updateUser(updatedUser: any): void {
    const index = this.users.findIndex((u) => u.email === updatedUser.email);
    if (index !== -1) {
      this.users[index] = updatedUser;

      // Guardar en localStorage solo si estamos en el navegador
      if (this.isBrowser()) {
        localStorage.setItem('registeredUsers', JSON.stringify(this.users));
      }
    }
  }

  // Método para enviar el email de reestablecimiento de contraseña
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  // Métodos para manejar el token
  setToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('token');
    }
    return null;
  }
}