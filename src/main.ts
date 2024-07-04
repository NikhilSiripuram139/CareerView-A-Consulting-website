import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { inject } from '@angular/core';
import { ClientsService } from './app/Services/clients.service';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

