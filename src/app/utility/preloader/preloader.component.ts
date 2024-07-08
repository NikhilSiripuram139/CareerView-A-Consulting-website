import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AuthserviceService } from '../../Services/authservice.service';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent implements OnInit{

  showloader: boolean = false;
  authservice = inject(AuthserviceService);

  ngOnInit(): void {
    this.authservice.show.subscribe((data)=>{
      this.showloader=data;
    })
  }

}
