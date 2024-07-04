import { Routes } from "@angular/router";
import { resolve } from "path";
import { CareerSectorsComponent } from "./career-sectors.component";
import { CanActivateChild } from "../authguard";
import { SectorDetailsComponent } from "../sector-details/sector-details.component";



export const CAREERS_ROUTES : Routes = [
    { path : '' , component : CareerSectorsComponent},
    { path:'', canActivateChild: [CanActivateChild] ,children: [
        { path:'Sectordetails/:id', component: SectorDetailsComponent}
    ]},
];
