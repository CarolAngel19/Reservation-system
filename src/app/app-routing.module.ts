import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GlampingComponent } from './components/glamping/glamping.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'reservationList', component: ReservationListComponent},
  { path: '', component: LogInComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'gampling', component: GlampingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
