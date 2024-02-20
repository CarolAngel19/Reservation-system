import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlampingModel } from 'models/glamping.model';
import { GlampingService } from 'services/Bookings/glamping.service';

@Component({
  selector: 'app-glamping',
  templateUrl: './glamping.component.html',
  styleUrls: ['./glamping.component.scss']
})
export class GlampingComponent implements OnInit {

  glampingForm: FormGroup;
    
    constructor(private fb: FormBuilder, private service:GlampingService) {
        this.glampingForm = this.fb.group({
            name: ['', Validators.required],
            capacity: ['', Validators.required],
            description: ['', Validators.required],
            image: ['', Validators.required]
        });
    }

    ngOnInit(): void {
      this.service.getAllGlamping().subscribe(
        (response: GlampingModel[]) => {
          console.log('Lista de glamping cargada:', response);
        },
        error => {
          console.error('Error al cargar la lista de glamping', error);
        }
      )
    }

    submitForm() {
        if (this.glampingForm.valid) {
            alert(`
              Name: ${this.glampingForm.value.name}
              Capacity: ${this.glampingForm.value.capacity}
              Description: ${this.glampingForm.value.description}
            `);
          }
    }

    saveGlamping(){
      if(this.glampingForm.valid){
          this.service.createGlamping(this.glampingForm.value).subscribe(
              response => {
                alert("Glamping creado");
              },
              error => {
                console.error('Error al crear glamping', error);
              }
          );
      }else{
        alert("Datos invalidos");
      }
  }

}
