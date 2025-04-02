// src/app/services/pqrsf.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PqrsfService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  enviarPQRSF(tipo: string, mensaje: string, archivos: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('tipo', tipo);
    formData.append('mensaje', mensaje);
    
    archivos.forEach(archivo => {
      formData.append('archivos', archivo, archivo.name);  // ✅ Asegúrate de incluir el nombre
    });
  
    // Elimina headers manuales (FormData genera automáticamente el Content-Type correcto)
    return this.http.post('http://localhost:8000/pqrsf/', formData, {
      reportProgress: true,
      observe: 'response'
    });
  }

}