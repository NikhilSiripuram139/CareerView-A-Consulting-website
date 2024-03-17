/*global console, document */
/*eslint-disable no-console*/


import { Component, OnInit, inject } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { SectorsComponent } from './sectors/sectors.component';
import { ServiceComponent } from './service/service.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, SectorsComponent, ServiceComponent, TestimonyComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  activeroute = inject(ActivatedRoute);

  

  ngOnInit() {
    this.activeroute.fragment.subscribe((data: string) => {
      this.jumptoview(data);
    })
  }



  jumptoview(section) {
    if(typeof window !== 'undefined'){
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } 
    }

  }

}
