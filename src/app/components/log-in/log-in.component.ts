import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'models/users.model';
import { GlobalFunctionsService } from 'services/Bookings/global-functions.service';
import { UserService } from 'services/Bookings/user.service';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})

export class LogInComponent {
    
    formGroup: FormGroup;
    constructor (private _builder: FormBuilder, private serviceUser: UserService, private router: Router, private globalfunction:GlobalFunctionsService) {
        this.formGroup = this._builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    login(){

        if(this.formGroup.valid){
            this.serviceUser.getUserByName(this.formGroup.value.username).subscribe(
                (response: UserModel) => {
                    if(response != null){
                        if(response.password == this.formGroup.value.password){
                            this.globalfunction.setUserId = response.id;
                            this.router.navigate([`/home`])
                        }else{
                            alert("Contraseña incorrecta")
                        }
                    }else{
                        alert("El nombre de usuario no existe")
                    }
                },
                error => {
                  console.error('Error al cargar la lista de glamping', error);
                }
              )

        }else{
            alert("Faltan campos")
        }
    }

}
