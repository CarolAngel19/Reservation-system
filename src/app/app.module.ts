import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { GlampingComponent } from './components/glamping/glamping.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ReservationListComponent,
    LogInComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    RegisterComponent,
    GlampingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
