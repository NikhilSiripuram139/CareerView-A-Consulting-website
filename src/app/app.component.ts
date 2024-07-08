import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthserviceService } from './Services/authservice.service';
import { PreloaderComponent } from './utility/preloader/preloader.component';
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { SnackbarComponent } from './utility/snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    HttpClientModule,
    PreloaderComponent,
    SnackbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'CareerView';

  showloader: boolean = false;
  errormessage : string | undefined;

  router = inject(Router);
  authservice = inject(AuthserviceService);

  ngOnInit() {
    this.authservice.autologin();


    this.authservice.errmsg.subscribe((data)=>{
      this.errormessage=data;
    })

    this.router.events.subscribe((routerevent: Event) => {
      if (routerevent instanceof ResolveStart) {
        this.showloader = true;
      }
      if (routerevent instanceof ResolveEnd || routerevent instanceof NavigationCancel || routerevent instanceof NavigationError) {
        this.showloader = false;
      }
    })
  }
 
  onActive(data) {
    if (typeof window !== 'undefined') {
      const element = window;
      if (element) {
        element.scroll(0, 0);
      }
    }

  }
}
