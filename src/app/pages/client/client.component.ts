// src/app/pages/client/client.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      tipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      dv: [''],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      tipoRegimenIVA: ['', Validators.required],
      responsabilidadFiscal: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.clientForm.valid) {
      const newClient: Client = this.clientForm.value;
      console.log('Nuevo cliente:', newClient);
      // Aquí puedes enviar los datos a tu API o servicio
    } else {
      console.log('Formulario inválido');
    }
  }
}