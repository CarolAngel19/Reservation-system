import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})

export class LogInComponent {
    formGroup: FormGroup;
    constructor (private _builder: FormBuilder) {
        this.formGroup = this._builder.group({
            name: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
            contrasena: ['', Validators.required]
        })
    }

    onSubmit() {
        if (this.formGroup.valid) {
            alert(`
              name: ${this.formGroup.value.name}
              email: ${this.formGroup.value.email}
              contraseña: ${this.formGroup.value.contraseña}
            `);
          }
    }

}
