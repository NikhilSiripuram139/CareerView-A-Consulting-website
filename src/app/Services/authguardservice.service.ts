import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';
import { ContactComponent } from '../home/contact/contact.component';
import { option } from '../models/careeroptions';
import { OptionsService } from './options.service';

export interface IDeactivateComponenet{
  canExit:()=>boolean | Observable<boolean> | Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponenet>, Resolve<option[]>{

  authservice=inject(AuthserviceService);
  router=inject(Router);
  optionservice=inject(OptionsService);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      
    if(this.authservice.isauthenticated()){
      // this.router.navigate(['/Sectordetails/:id']);
      return true;
    }else{
      this.router.navigate(['/Login']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.canActivate(childRoute, state);
  }

  canDeactivate(component: IDeactivateComponenet, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return component.canExit();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): option[] | Observable<option[]> | Promise<option[]> {
      return this.optionservice.getalloptions();
  }

}
