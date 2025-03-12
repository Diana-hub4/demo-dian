import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { ForgotPasswordComponent } from '../app/pages/forgot-password/forgot-password.component';
import { RegisterComponent } from '../app/models/pages/register/register.component';
import { PortalContadorComponent } from 'app/models/portal-contador/portal-contador.component';
import { AyudaComponent } from 'app/ayuda/ayuda.component';
import { CapacitacionesComponent } from 'app/capacitaciones/capacitaciones.component';
import { AccesoInformacionCompletaComponent } from './acceso-informacion-completa/acceso-informacion-completa.component';
import { PortalClienteComponent } from './portal-cliente/portal-cliente/portal-cliente.component';

export const routes: Routes = [
  { path: 'portal-cliente', component: PortalClienteComponent },
  { path: '', component: LoginComponent }, // Ruta por defecto (Login)
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'capacitaciones', component: CapacitacionesComponent },
  { path: 'portal-contador', component: PortalContadorComponent }, // Ruta del Portal del Contador
  { path: 'acceso-informacion-completa', component: AccesoInformacionCompletaComponent },
  { path: '', redirectTo: '/portal-contador', pathMatch: 'full' }, // Ruta por defecto
  { path: '', redirectTo: '/preguntas-frecuentes', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login' }, // Redirige a /login si la ruta no existe
  { path: '', component: LoginComponent }, // Ruta por defecto (Login)
  { path: 'login', component: LoginComponent },
  { path: 'portal-contador', component: PortalContadorComponent }, // Ruta del Portal del Contador
  { path: 'register', component: RegisterComponent }, // Ruta de la vista de crear cuenta
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: '/login' }, // Redirige a login si la ruta no existe
];


