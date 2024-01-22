import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'reservationList', component: ReservationListComponent},
  { path: 'logIn', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
