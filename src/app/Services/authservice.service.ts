import { EventEmitter, Inject, Injectable, Output, PLATFORM_ID, inject } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../Models/AuthResponse';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { UserCredentials } from '../Models/usercredentials';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  router = inject(Router);
  islogged: boolean = false;
  private tokenexpiretime: any;

  http = inject(HttpClient);

  errmsg = new Subject<string | null>();
  show = new Subject<boolean>();
  user = new BehaviorSubject<UserCredentials>(null);

  signup(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };

    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKEY, data)
      .pipe(catchError(this.handleerrors), tap((res) => {
        this.handlecreateuser(res);
      }));
  }

  login(email: string, password: string) {
    const data = { email: email, password: password, returnSecureToken: true };

    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKEY, data)
      .pipe(catchError(this.handleerrors), tap((res) => {
        this.handlecreateuser(res);
      }));
  }

  logout() {
    this.user.next(null);

    localStorage.removeItem('user');
    this.router.navigate(['/Login']);

    if (this.tokenexpiretime) {
      clearTimeout(this.tokenexpiretime);
    }

    this.tokenexpiretime = null;

  }

  autologin() {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(localStorage.getItem('user'));


      if (!user) {
        this.router.navigate(['/Login']);
      }

      if (user) {
        const logeduser = new UserCredentials(user.email, user.id, user._token, user._expiresIn);


        if (logeduser.token) {
          this.user.next(logeduser);
          const timervalue = new Date(user._expiresIn).getTime() - new Date().getTime();

          // console.log(timervalue)
          this.autologout(timervalue);
        }
      }
    }
  }

  autologout(expiretime: number) {
    this.tokenexpiretime = setTimeout(() => {
      this.logout();
    }, expiretime);
  }


  handlecreateuser(res: any) {
    const expiresInTs = new Date().getTime() + +res.expiresIn * 1000;
    const expiresIn = new Date(expiresInTs);
    const user = new UserCredentials(res.email, res.localId, res.idToken, expiresIn);

    this.user.next(user);

    this.autologout(res.expiresIn * 1000);


    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user', JSON.stringify(user));
    }

  }


  handleerrors(err: any) {
    let errormsg = 'An unknown error occured!';

    if (!err.error || !err.error.error) {
      return throwError(() => errormsg);
    }

    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        errormsg = 'This email already exist!'
        break;
      case 'OPERATION_NOT_ALLOWED':
        errormsg = 'This operation not allowed!'
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errormsg = 'To many attempts try again later!'
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errormsg = 'Invalid email or password!'
        break;
    }

    return throwError(() => errormsg);
  }



}
