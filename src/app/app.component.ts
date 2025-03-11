import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que sea standalone
  imports: [RouterOutlet], // Añade RouterOutlet aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}