import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  token: string;
  userType: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Define baseUrl como propiedad de la clase
  private readonly apiUrl: string = 'http://localhost:4200/login'; 
  forgotPassword: any;
  API_URL: any;

  constructor(private http: HttpClient) { }

  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserRole(): string {
    return localStorage.getItem('userType') || '';
  }
}