import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importa RouterOutlet
import { AuthService } from './auth/auth.service';
import { OnInit } from '@angular/core'; // Importa OnInit

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true, // Asegúrate de que sea standalone
  imports: [RouterOutlet], // Añade RouterOutlet aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    (this.authService as any).initializeAuth?.();
  }
}