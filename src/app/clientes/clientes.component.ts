import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: true, // Asegúrate de que sea standalone
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {

  // Métodos utilizados en el HTML
  cancelar() {
    console.log('Cancelar cliente');
  }

  guardar() {
    console.log('Guardar cliente');
  }
}