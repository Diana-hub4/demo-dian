import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PreguntasFrecuentesComponent } from '../preguntas-frecuentes/preguntas-frecuentes.component';

@Component({
  selector: 'app-pregunta-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pregunta-detalle.component.html',
  styleUrls: ['./pregunta-detalle.component.css'],
})
export class PreguntaDetalleComponent implements OnInit {
  pregunta: any;

  constructor(private route: ActivatedRoute, private faq: PreguntasFrecuentesComponent) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Obtener el ID de la URL
    this.pregunta = this.faq.preguntas.find((item) => item.id === id); // Buscar la pregunta por ID
  }

  // Añade esta función para formatear la descripción
  formatearDescripcion(descripcion: string): string {
    return descripcion?.replace(/\n/g, '<br>') || '';
  }
}


