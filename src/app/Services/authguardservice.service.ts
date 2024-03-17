import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService implements CanActivate{

  authservice=inject(AuthserviceService);
  router=inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      
    if(this.authservice.isauthenticated()){
      // this.router.navigate(['/Sectordetails/:id']);
      return true;
    }else{
      this.router.navigate(['/Login']);
      return false;
    }

  }




}
