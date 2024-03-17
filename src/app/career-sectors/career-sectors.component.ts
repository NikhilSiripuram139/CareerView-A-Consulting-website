import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { OptionsService } from '../Services/options.service';
import { option } from '../models/careeroptions';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { details } from '../models/details';

@Component({
  selector: 'app-career-sectors',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './career-sectors.component.html',
  styleUrl: './career-sectors.component.css'
})
export class CareerSectorsComponent implements OnInit{

  careeroptions=inject(OptionsService);
  router=inject(Router);

  activeroute=inject(ActivatedRoute);
  searchstring:string;

  careers:option[];

  ngOnInit(){
    // this.careers=this.careeroptions.alloptions;

    this.activeroute.queryParamMap.subscribe((data)=>{
      this.searchstring=data.get('search');
    })

    if(this.searchstring === undefined || this.searchstring === '' || this.searchstring === null || this.searchstring === 'all'){
      this.careers=this.careeroptions.alloptions;
    }else{
      this.careers=this.careeroptions.alloptions.filter(x=>x.name.toLowerCase().includes(this.searchstring.toLowerCase()));
    }

    
  }
  
  

}
