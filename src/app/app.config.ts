import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { OptionsService } from './Services/options.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules)),
    provideClientHydration(), 
    importProvidersFrom(HttpClientModule), 
    provideHttpClient(withFetch()),
    {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptorService, multi : true}
  ]
};
