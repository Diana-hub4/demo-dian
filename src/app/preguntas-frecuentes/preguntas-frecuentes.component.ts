import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Para usar RouterLink

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [CommonModule, RouterModule], // Añade RouterModule aquí
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css'],
})
export class PreguntasFrecuentesComponent implements OnInit {
  public preguntas: any[] = [ // Hacer la propiedad pública
    // ... (tu lista de preguntas)

    {
      id: 1,
      title: '¿Dificultades en tu software?',
      shortDescription: '¿Pantalla en blanco o cargando? Podemos solucionarlo juntos siguiendo estos pasos:',
      longDescription: `
        1. Cierra la sesión de su sistema contable y vuelve a ingresar. Si esto no funciona, continúa con el paso número dos.
        2. Borrar el caché de navegación, de acuerdo al navegador que utilices:
           - **Google Chrome:** Ubícate en la parte superior izquierda, haz clic en el ícono de los tres puntos y selecciona "Configuración". Luego, en "Privacidad y seguridad", selecciona "Borrar datos de navegación". Marca las casillas "Cookies y otros datos de sitios" y "Archivos e imágenes en caché". Finalmente, haz clic en "Borrar datos".
           - **Microsoft Edge:** Ubícate en la parte superior izquierda, haz clic en el ícono de los tres puntos y selecciona "Configuración". Luego, en "Privacidad, búsqueda y servicios", selecciona "Elegir lo que se debe borrar". Marca las casillas "Cookies y otros datos de sitios" y "Archivos e imágenes en caché". Finalmente, haz clic en "Borrar ahora".
        3. Cierra la sesión de su sistema contable y vuelve a ingresar.
      `,
    },
    {
      id: 2,
      title: 'Prueba de velocidad de internet',
      shortDescription: 'Revisa la velocidad de tu internet y valida que todo esté bien con tu proveedor de servicio.',
      longDescription: `
        Para revisar la velocidad de tu internet y validar que todo se encuentre bien con tu proveedor de servicio, puedes ingresar al ícono de ayuda y hacer clic en la opción “Prueba de velocidad de internet”. El sistema automáticamente abrirá una página donde te mostrará la velocidad actual de tu internet. Si la velocidad es inferior a la que contrataste con tu proveedor, puede ser que existan fallas o problemas de lentitud con tu red de Internet.
      `,
    },
    {
      id: 3,
      title: 'Envío y reenvío de facturación electrónica',
      image: 'assets/images/facturacion-electronica.jpg',
      description:
        'El envío y reenvío de facturación electrónica es un proceso automatizado que permite a los usuarios emitir y reenviar facturas electrónicas a sus clientes. En nuestro sistema, puedes generar facturas en formato XML y enviarlas directamente a la DIAN. Si necesitas reenviar una factura, simplemente accede al historial de facturas y selecciona la opción "Reenviar".',
    },
    {
      id: 4,
      title: 'Liquidación de nómina',
      image: 'assets/images/liquidacion-nomina.jpg',
      description:
        'La liquidación de nómina es el proceso mediante el cual se calculan los salarios, prestaciones y deducciones de los empleados. En nuestro sistema, puedes configurar los parámetros de nómina, como salarios básicos, horas extras, y deducciones legales. El sistema generará automáticamente la liquidación y los comprobantes de pago.',
    },
    {
      id: 5,
      title: 'Elaboración de otros comprobantes',
      image: 'assets/images/comprobantes.jpg',
      description:
        'Además de las facturas electrónicas, nuestro sistema permite la elaboración de otros comprobantes como notas crédito, notas débito, y recibos de caja. Estos comprobantes se generan de manera similar a las facturas, y puedes personalizarlos según las necesidades de tu empresa.',
    },
    {
      id: 6,
      title: 'Certificación de retenciones en la fuente',
      image: 'assets/images/retenciones-fuente.jpg',
      description:
        'La certificación de retenciones en la fuente es un documento que acredita las retenciones aplicadas a pagos realizados por la empresa. En nuestro sistema, puedes generar estas certificaciones de manera automática, seleccionando el periodo y los proveedores o empleados a los que se les aplicó la retención.',
    },
  ];

  pregunta: any; // Variable para almacenar la pregunta seleccionada

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar la pregunta específica si es necesario
    // Por ejemplo, podrías obtener el ID de la pregunta desde la URL y buscar en el arreglo
    this.pregunta = this.preguntas[0]; // Cargar la primera pregunta como ejemplo
  }

  formatearDescripcion(descripcion: string): string {
    return descripcion?.replace(/\n/g, '<br>') || '';
  }
}