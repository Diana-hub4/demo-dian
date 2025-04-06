import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortalContadorComponent } from 'app/portal-contador/portal-contador.component';
import { AyudaComponent } from 'app/ayuda/ayuda.component';
import { CapacitacionesComponent } from 'app/capacitaciones/capacitaciones.component';
import { PortalClienteComponent } from './portal-cliente/portal-cliente/portal-cliente.component';
import { FacturacionComponent } from './facturacion/facturacion.component'; // Importa el componente de facturación
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthGuard } from './auth/auth.guard';


export const routes: Routes = [
  // Rutas públicas
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'portal-contador', 
    component: PortalContadorComponent,
    canActivate: [AuthGuard], // Protege la ruta
    data: { requiredRole: 'contador' } 
  },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ResetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  // Rutas protegidas
  { 
    path: 'portal-contador', 
    component: PortalContadorComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'portal-cliente', 
    component: PortalClienteComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'ayuda', 
    component: AyudaComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'capacitaciones', 
    component: CapacitacionesComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'portal-cliente', 
    component: PortalClienteComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'facturacion', 
    component: FacturacionComponent,
    canActivate: [AuthGuard] 
  },

  // Redirecciones
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


