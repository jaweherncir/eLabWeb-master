import { Routes } from '@angular/router';
import { ComponentAuthComponent } from '../Login/component-auth/component-auth.component';
import { DashboardComponent } from '../Dashboard/dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: ComponentAuthComponent
    },
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    },

]; 
