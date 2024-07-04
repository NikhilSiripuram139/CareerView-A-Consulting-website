import { PreloadAllModules, PreloadingStrategy, Routes } from '@angular/router';
import { LogComponent } from './header/log/log.component';
import { CanActivate, resolve} from './authguard';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactComponent } from './home/contact/contact.component';


export const routes: Routes = [
    { path:'',
        component: HomeComponent, 
        canActivate: [CanActivate]},
    { path:'Home', 
        canActivate: [CanActivate], 
        loadComponent : ()=>import('./home/home.component').then(c=>c.HomeComponent),
    },
    { path:'Login', component: LogComponent},
    { path:'About', 
        canActivate: [CanActivate],
        loadComponent : ()=>import('./about/about.component').then(c=>c.AboutComponent)
    },
    { path:'Services',
        canActivate: [CanActivate],
        loadComponent : ()=>import('./ourservices/ourservices.component').then(c=>c.OurservicesComponent)
    },
    { path:'Contact us',
        canActivate: [CanActivate],
        canDeactivate: [(comp:ContactusComponent)=>{return comp.canExit()}],
        loadComponent : ()=>import('./contactus/contactus.component').then(c=>c.ContactusComponent)
    },
    { path:'Careers',
        canActivate: [CanActivate], 
        resolve:{options:resolve}, 
        loadChildren : () => import('./career-sectors/career.routes').then(m=>m.CAREERS_ROUTES)
    }, 
    { path:'Privacy',
        canActivate: [CanActivate],
        loadComponent : ()=>import('./privacy-note/privacy-note.component').then(c=>c.PrivacyNoteComponent)
    },
    { path:'Terms',
        canActivate: [CanActivate],
        loadComponent : ()=>import('./trem-conditions/trem-conditions.component').then(c=>c.TremConditionsComponent)
    },
    { path:'Cookies',
        canActivate: [CanActivate],
        loadComponent : ()=>import('./cookies-ps/cookies-ps.component').then(c=>c.CookiesPsComponent)
    },
    { path:'Access',
        canActivate: [CanActivate],
        loadComponent : ()=>import('./access-statement/access-statement.component').then(c=>c.AccessStatementComponent)
    },
    { path:'**',
        loadComponent : ()=>import('./notfound/notfound.component').then(c=>c.NotfoundComponent)
    },
];
