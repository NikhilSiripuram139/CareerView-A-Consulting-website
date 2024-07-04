import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthserviceService } from "./authservice.service";
import { Subject, exhaustMap, take } from "rxjs";


export class AuthInterceptorService  implements HttpInterceptor{

    authservice = inject(AuthserviceService);

    intercept(req: HttpRequest<any>, next: HttpHandler){
        return this.authservice.user.pipe(take(1), exhaustMap(user=>{
            this.authservice.show.next(true);

            if(!user){
                this.authservice.show.next(false);
                return next.handle(req);
            }
            
            const modifiedreq = req.clone({
                params: new HttpParams().set('auth', user.token)
            })
            this.authservice.show.next(false);
            return next.handle(modifiedreq);
        }))
    }
    



}