import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'routes';

  showloader:boolean=false;

  router=inject(Router);

  ngOnInit(){
      this.router.events.subscribe((routerevent:Event)=>{
        if(routerevent instanceof NavigationStart){
          this.showloader=true;
        }
        if(routerevent instanceof NavigationEnd || routerevent instanceof NavigationCancel || routerevent instanceof NavigationError){
          this.showloader=false;
        }
      })
  }

  onActive(data){
    if(typeof window !== 'undefined'){
      const element=window;
      if(element){
        element.scroll(0,0);
      }
    }

  }
}
