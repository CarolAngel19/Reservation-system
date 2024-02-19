import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
    
}
