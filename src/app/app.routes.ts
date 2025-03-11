import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { ForgotPasswordComponent } from '../app/pages/forgot-password/forgot-password.component';
import { RegisterComponent } from '../app/models/pages/register/register.component';
import { PortalContadorComponent } from 'app/models/portal-contador/portal-contador.component';
import { AyudaComponent } from 'app/ayuda/ayuda.component';
import { PreguntasFrecuentesComponent } from 'app/preguntas-frecuentes/preguntas-frecuentes.component';
import { CapacitacionesComponent } from 'app/capacitaciones/capacitaciones.component';
import { PqrsfComponent } from 'app/pqrsf/pqrsf.component';
import { ConfirmacionPqrsfComponent } from './confirmacion-pqrsf/confirmacion-pqrsf.component'; // Opcional: Para la página de confirmación
import { PreguntaDetalleComponent } from './pregunta-detalle/pregunta-detalle.component';
import { CrearFacturaElectronicaComponent } from './crear-factura-electronica/crear-factura-electronica.component';
import { CrearDocumentoSoporteComponent } from './crear-documento-soporte/crear-documento-soporte.component';
import { CrearNominaElectronicaComponent } from './crear-nomina-electronica/crear-nomina-electronica.component';
import { AccesoInformacionCompletaComponent } from './acceso-informacion-completa/acceso-informacion-completa.component';


export const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta por defecto (Login)
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent }, // Ruta de preguntas frecuentes
  { path: 'capacitaciones', component: CapacitacionesComponent },
  { path: 'portal-contador', component: PortalContadorComponent }, // Ruta del Portal del Contador
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent }, // Ruta de Preguntas Frecuentes
  { path: 'pregunta-detalle/:id', component: PreguntaDetalleComponent }, // Ruta para el detalle de la pregunta
  { path: 'pqrsf', component: PqrsfComponent },
  { path: '', redirectTo: '/portal-contador', pathMatch: 'full' }, // Ruta por defecto
  { path: 'confirmacion-pqrsf', component: PqrsfComponent }, // Opcional: Para la página de confirmación
  { path: 'crear-factura-electronica', component: CrearFacturaElectronicaComponent },
  { path: 'crear-documento-soporte', component: CrearDocumentoSoporteComponent },
  { path: 'crear-nomina-electronica', component: CrearNominaElectronicaComponent },
  { path: 'acceso-informacion-completa', component: AccesoInformacionCompletaComponent },
  { path: 'crear-factura-electronica/:plan',component: CrearFacturaElectronicaComponent},
  { path: '', redirectTo: '/portal-contador', pathMatch: 'full' }, // Ruta por defecto
  { path: '', redirectTo: '/preguntas-frecuentes', pathMatch: 'full' }, // Ruta por defecto
  { path: '', redirectTo: '/portal-contador', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login' }, // Redirige a /login si la ruta no existe
];


