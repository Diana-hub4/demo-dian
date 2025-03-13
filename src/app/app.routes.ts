import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { ForgotPasswordComponent } from '../app/pages/forgot-password/forgot-password.component';
import { RegisterComponent } from '../app/models/pages/register/register.component';
import { PortalContadorComponent } from 'app/models/portal-contador/portal-contador.component';
import { AyudaComponent } from 'app/ayuda/ayuda.component';
import { CapacitacionesComponent } from 'app/capacitaciones/capacitaciones.component';
import { PortalClienteComponent } from './portal-cliente/portal-cliente/portal-cliente.component';
import { FacturacionComponent } from './facturacion/facturacion.component'; // Importa el componente de facturación




export const routes: Routes = [
  { path: 'portal-cliente', component: PortalClienteComponent },
  { path: '', component: LoginComponent }, // Ruta por defecto (Login)
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'capacitaciones', component: CapacitacionesComponent },
  { path: 'portal-contador', component: PortalContadorComponent }, // Ruta del Portal del Contador
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'portal-cliente',    component: PortalClienteComponent}, // Componente del Portal del Cliente
  { path: '', redirectTo: '/portal-contador', pathMatch: 'full' }, // Ruta por defecto
  { path: '', redirectTo: '/preguntas-frecuentes', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login' }, // Redirige a /login si la ruta no existe
  { path: '', component: LoginComponent }, // Ruta por defecto (Login)
  { path: 'login', component: LoginComponent }, // Ruta del Portal del Contador
  { path: '', redirectTo: '/portal-contador', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/portal-contador' }, // Redirige a Portal del Contador si la ruta no existe  { path: 'register', component: RegisterComponent }, // Ruta de la vista de crear cuenta
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login' }, // Redirige a login si la ruta no existe
  
];



