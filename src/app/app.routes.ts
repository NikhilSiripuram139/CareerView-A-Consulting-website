import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { ServiceComponent } from './home/service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { LogComponent } from './header/log/log.component';
import { CareerSectorsComponent } from './career-sectors/career-sectors.component';
import { PrivacyNoteComponent } from './privacy-note/privacy-note.component';
import { TremConditionsComponent } from './trem-conditions/trem-conditions.component';
import { CookiesPsComponent } from './cookies-ps/cookies-ps.component';
import { AccessStatementComponent } from './access-statement/access-statement.component';
import { SectorDetailsComponent } from './sector-details/sector-details.component';
import { AuthguardserviceService } from './Services/authguardservice.service';
import { CanActivate, CanActivateChild } from './authguard';

export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'Home', component: HomeComponent},
    { path:'About', component: AboutComponent},
    { path:'Services', component: OurservicesComponent},
    { path:'Contact us', component: ContactusComponent, canDeactivate: [(comp: ContactusComponent)=>{comp.canExit()}]},
    { path:'Careers', component: CareerSectorsComponent, resolve:{options:AuthguardserviceService}},
    { path:'Careers', canActivateChild:[CanActivateChild], children: [
        { path:'Sectordetails/:id', component: SectorDetailsComponent}
    ]},
    { path:'Login', component: LogComponent},
    { path:'Privacy', component: PrivacyNoteComponent},
    { path:'Terms', component: TremConditionsComponent},
    { path:'Cookies', component: CookiesPsComponent},
    { path:'Access', component: AccessStatementComponent},
    { path:'**', component: NotfoundComponent},
];
