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
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        })
    }

    onSubmit() {
        if (this.formGroup.valid) {
            alert(`
              Email: ${this.formGroup.value.email}
              Password: ${this.formGroup.value.password}
            `);
          }
    }

}
