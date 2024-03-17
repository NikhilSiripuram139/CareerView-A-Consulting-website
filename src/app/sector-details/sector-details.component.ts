import { Component, OnInit, inject } from '@angular/core';
import { details } from '../models/details';
import { OptionsService } from '../Services/options.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sector-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sector-details.component.html',
  styleUrl: './sector-details.component.css'
})
export class SectorDetailsComponent implements OnInit{

  selectedsector:details;
  sectorid:number;

  sectorsservice=inject(OptionsService);
  activeroute=inject(ActivatedRoute);

  ngOnInit(){
    this.activeroute.paramMap.subscribe((data)=>{
      this.sectorid=+data.get('id');
    })

    this.selectedsector=this.sectorsservice.sectordetails.find(x=>x.id===this.sectorid);

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
