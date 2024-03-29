import { inject } from "@angular/core"
import { AuthserviceService } from "./Services/authservice.service"
import { Router } from "@angular/router";
import { OptionsService } from "./Services/options.service";

export const CanActivate=()=>{
    const authservice=inject(AuthserviceService);
    const router=inject(Router);

    if(authservice.isauthenticated()){
        // this.router.navigate(['/Sectordetails/:id']);
        return true;
    }else{
        router.navigate(['/Login']);
        return false;
    }
    
}

export const CanActivateChild=()=>{
    return CanActivate();
}

export const resolve=()=>{
    const optionsservice=inject(OptionsService);
    return optionsservice.getalloptions();
}