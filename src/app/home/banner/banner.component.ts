import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  router=inject(Router);

  searchclicked(value){
    this.router.navigate(['/Careers'], {queryParams:{ search: value}});
  }

}
