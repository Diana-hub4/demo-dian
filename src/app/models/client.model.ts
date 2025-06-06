// src/app/models/client.model.ts
export interface Client {
    id?: number; // Opcional, para cuando el cliente ya está registrado
    tipoIdentificacion: string; // NIT, CC, etc.
    identificacion: string; // Número de identificación
    dv?: string; // Dígito de verificación (opcional para NIT)
    nombres: string;
    apellidos: string;
    ciudad: string;
    direccion: string;
    correoElectronico: string;
    telefono: string;
    tipoRegimenIVA: string; // Régimen IVA
    responsabilidadFiscal: string; // Responsabilidad fiscal (Gran contribuyente, autorretenedor, etc.)
    nit: string;
    planType: string;
    status: string;
  }
  export interface Client {
    empresa: string;
    nit: string;
    cedula: string;
    plan: string;
    estado: string;
  }