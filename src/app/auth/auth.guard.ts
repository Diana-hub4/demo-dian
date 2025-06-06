import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService, 
    private router: Router) {}

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      const requiredRole = route.data['requiredRole'];
      const userRole = this.authService.getUserRole();
      
      if (this.authService.isLoggedIn() && userRole === requiredRole) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }