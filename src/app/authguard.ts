import { inject } from "@angular/core"
import { AuthserviceService } from "./Services/authservice.service"
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { OptionsService } from "./Services/options.service";
import { Observable, map, take } from "rxjs";

export const CanActivate=(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
):boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree>=>{
    
    const authservice = inject(AuthserviceService);
    const router = inject(Router);

    return authservice.user.pipe(take(1), map((user)=>{
        const isloged = user? true : false;
        if(isloged){
            return true;
        }
        else{
            return router.createUrlTree(['/Login']);
        }
    }))
    
}

export const CanActivateChild=(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
    return CanActivate(route,state);
}

export const resolve=()=>{
    const optionsservice=inject(OptionsService);
    return optionsservice.getalloptions();
}