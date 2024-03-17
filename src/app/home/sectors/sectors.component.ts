import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { OptionsService } from '../../Services/options.service';
import { option } from '../../models/careeroptions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sectors',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sectors.component.html',
  styleUrl: './sectors.component.css'
})
export class SectorsComponent implements OnInit{

  careeroptions=inject(OptionsService);

  careers:option[]=[];

  ngOnInit(){
    this.careers=this.careeroptions.options;
  }

 
}
