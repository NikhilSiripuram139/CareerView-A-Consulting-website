import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { OptionsService } from '../../Services/options.service';
import { option } from '../../Models/careeroptions';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent implements OnInit{

  optionsservice=inject(OptionsService);
  router=inject(Router);

  careers:option[]=[];

  ngOnInit(){
    
    this.optionsservice.onfetchsectors().subscribe({
      next: (list)=>{
        this.careers = list.slice(0,6);
      }
    })
  }

  
}
