import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
 {
    path: '' ,redirectTo:'login' , pathMatch:'full'
 },
 {
    path:'login',
    component:LoginComponent
 },
 {
    path:'home',
    component:HomeComponent
 },
 {
    path:'reservation',
    component:ReservationComponent
 },
 {
    path:'admin',
    component:AdminComponent
 },
 {
   path:'register',
   component:RegisterComponent
}
];
