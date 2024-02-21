import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';
import { BookingService } from 'services/Bookings/booking.service';
import { GlobalFunctionsService } from 'services/Bookings/global-functions.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit{

  reservationForm: FormGroup;
  glampingId!:string | null;
  userId!:number;
    
    constructor(private fb: FormBuilder, private route: ActivatedRoute, private globalfunction:GlobalFunctionsService, private service:BookingService) {
        this.reservationForm = this.fb.group({
            number_of_adults: ['', [Validators.required, Validators.min(1)]],
            number_of_children: [''],
            date_entry: ['', Validators.required],
            date_exit: ['', Validators.required],
            hour_entry: ['', Validators.required],
            hour_exit: ['', Validators.required]
        });
    }

    ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap) => {
        if(params.get('id') != null){
          this.glampingId = params.get('id');
        }
      })

      this.userId = this.globalfunction.getUserId;

      console.log("Glamping id: ", this.glampingId)
      console.log("User id: ", this.userId)
    }

    submitForm() {
        if (this.reservationForm.valid) {
            alert(`
              Adults: ${this.reservationForm.value.number_of_adults}
              Children: ${this.reservationForm.value.number_of_children}
              Date Entry: ${this.reservationForm.value.date_entry}
              Date Exit: ${this.reservationForm.value.date_exit}
              Hour Entry: ${this.reservationForm.value.hour_entry}
            `);
          }
    }

    saveBooking(){
      if(this.reservationForm.valid){
        const data = {
          "user_id": this.userId,
          "id_glamping": this.glampingId,
          "number_of_adults": this.reservationForm.value.number_of_adults,
          "number_of_children": this.reservationForm.value.number_of_children,
          "date_entry": this.reservationForm.value.date_entry,
          "date_exit": this.reservationForm.value.date_exit,
          "hour_entry": this.reservationForm.value.hour_entry,
          "hour_exit": this.reservationForm.value.hour_exit
        };
          this.service.createBooking(data).subscribe(
              response => {
                alert("Booking creado");
                console.log(data); 
              },
              error => {
                console.error('Error al crear booking', error);
              }
          );
      }else{
        alert("Datos invalidos");
      }
  }
}
