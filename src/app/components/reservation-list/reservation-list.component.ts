import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {
    
    reservationForm: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.reservationForm = this.fb.group({
            id_user: ['', Validators.required],
            id_Finca: ['', Validators.required],
            numAdultos: ['', [Validators.required, Validators.min(1)]],
            numNiños: [''],
            FechaEntrada: ['', Validators.required],
            FechaSalida: ['', Validators.required],
            HoraLLegada: ['', Validators.required]
        });
    }

    submitForm() {
        if (this.reservationForm.valid) {
            alert(`
              Adultos: ${this.reservationForm.value.numeroDeadultos}
              Niños: ${this.reservationForm.value.numeroDeniños}
              FechaEntrada: ${this.reservationForm.value.FechaEntrada}
              FechaSalida: ${this.reservationForm.value.FechaSalida}
              HoraLLegada: ${this.reservationForm.value.HoraLLegada}
            `);
          }
    }
}
