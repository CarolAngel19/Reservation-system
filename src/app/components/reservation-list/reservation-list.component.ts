import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { GlampingService } from 'services/Bookings/glamping.service';
import { GlampingModel } from 'models/glamping.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit{

  glampings: GlampingModel[] = [];

  constructor(private location: Location, private service:GlampingService, private router:Router) { }
  
  ngOnInit(): void {
    this.service.getAllGlamping().subscribe(
      (response: GlampingModel[]) => {
        this.glampings = response;
        console.log('Lista de glamping cargada:', response);
      },
      error => {
        console.error('Error al cargar la lista de glamping', error);
      }
    )
  }

  booking(id:number){
    console.log("Glamping: ", id)
    this.router.navigate([`/reservation/${id}`])
  }

  goBack(): void {
    this.location.back();
  }
    
}
