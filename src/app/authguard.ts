import { inject } from "@angular/core"
import { AuthserviceService } from "./Services/authservice.service"
import { Router } from "@angular/router";

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