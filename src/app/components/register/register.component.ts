import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    formGroup: FormGroup;

    constructor (private _builder: FormBuilder) {
        this.formGroup = this._builder.group({
            name: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.formGroup.valid) {
            alert(` Bienvenido ${this.formGroup.value.name}`);
        }
    }
}
