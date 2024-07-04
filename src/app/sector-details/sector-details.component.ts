import { Component, OnInit, inject } from '@angular/core';
import { details } from '../Models/details';
import { OptionsService } from '../Services/options.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sector-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sector-details.component.html',
  styleUrl: './sector-details.component.css'
})
export class SectorDetailsComponent implements OnInit{

  selectedsector:details | undefined;
  sectorid:number;
  sectordetails:details[]=[];
  showdetails:boolean=false;

  optionsservice=inject(OptionsService);
  activeroute=inject(ActivatedRoute);

  ngOnInit(){

    this.optionsservice.onfetchsectordetails().subscribe({
      next: (list)=>{
        this.sectordetails = list;
        // console.log(this.sectordetails)
      }
    })

    this.activeroute.paramMap.subscribe((data)=>{
      this.sectorid=+data.get('id');
      // console.log(this.sectorid);
    })


    setTimeout(() => {
      this.selectedsector=this.sectordetails.find(x=>x.id===this.sectorid);
      // console.log(this.selectedsector);
      this.showdetails=true;
    }, 1000);

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
