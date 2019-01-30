import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes:Routes = [
    {
        path:'',
        component: LoginComponent
    },
    {
      path:'dashboard',
      component: DashboardComponent
    }
]

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(routes);
