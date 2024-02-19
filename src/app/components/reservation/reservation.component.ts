import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {

  reservationForm: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.reservationForm = this.fb.group({
            user_id: ['', Validators.required],
            id_glamping: ['', Validators.required],
            number_of_adults: ['', [Validators.required, Validators.min(1)]],
            number_of_children: [''],
            date_entry: ['', Validators.required],
            date_exit: ['', Validators.required],
            hour_entry: ['', Validators.required],
            hour_exit: ['', Validators.required]
        });
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

}
