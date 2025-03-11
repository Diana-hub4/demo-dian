// src/app/services/client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model'; // Asegúrate de ajustar esta ruta

@Injectable({
  providedIn: 'root', // Esto permite que el servicio esté disponible en toda la aplicación
})
export class ClientService {
  private apiUrl = 'https://api.example.com/clients'; // Cambia esta URL por la de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener todos los clientes
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Método para buscar clientes por término
  searchClients(searchTerm: string): Observable<Client[]> {
    const url = `${this.apiUrl}?q=${searchTerm}`; // Ajusta la URL según tu API
    return this.http.get<Client[]>(url);
  }
}