import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-glamping',
  templateUrl: './glamping.component.html',
  styleUrls: ['./glamping.component.scss']
})
export class GlampingComponent {

  glampingForm: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.glampingForm = this.fb.group({
            name: ['', Validators.required],
            capacity: ['', Validators.required],
            description: ['', Validators.required]
        });
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

}
