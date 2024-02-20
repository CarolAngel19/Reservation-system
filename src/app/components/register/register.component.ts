import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'services/Bookings/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
    formGroup: FormGroup;

    constructor (private _builder: FormBuilder, private userService: UserService, private router:Router) {

        this.formGroup = this._builder.group({
            name: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required]
        });
    }

    onSubmit() {
    }

    saveUser(){
        if(this.formGroup.valid){
            this.userService.createUser(this.formGroup.value).subscribe(
                response => {
                  this.router.navigate(['/home'])
                },
                error => {
                  console.error('Error al crear usuario', error);
                }
            );
        }else{
            alert("Datos invalidos");
        }
    }
}
