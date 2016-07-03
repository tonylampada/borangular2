import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: RouterConfig = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },  
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },    
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
