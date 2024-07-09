import { Component, OnInit, inject } from '@angular/core';
import { details } from '../Models/details';
import { OptionsService } from '../Services/options.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../Services/authservice.service';

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
  authservice = inject(AuthserviceService);

  optionsservice=inject(OptionsService);
  activeroute=inject(ActivatedRoute);

  ngOnInit(){
    this.optionsservice.onfetchsectordetails().subscribe({
      next: (list)=>{
        this.sectordetails = list;
        this.authservice.show.next(false);
      }
    })

    this.activeroute.paramMap.subscribe((data)=>{
      this.sectorid=+data.get('id');
    })


    setTimeout(() => {
      this.selectedsector=this.sectordetails.find(x=>x.id===this.sectorid);
      this.showdetails=true;
    }, 500);

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
