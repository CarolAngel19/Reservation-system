import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root',
})
export class UserService {

    private settingsUrl = '../../config/settings.json';

    constructor(private http: HttpClient){}

    // Método para obtener todos los usuarios
    public getAllUsers(){
        return this.http.get(``);
    }

    // Método para crear un usuario
    public createUser(data: any){
        return this.http.post(``, data);
    }

    // Método para obtener un usuario por su ID
    public getUsersById(){
        return this.http.get(``);
    }

    // Método para eliminar un usuario
    public deleteUserById(){
        return this.http.delete(``);
    }

    // Método para actualizar un usuario
    public updateUser(data: any){
        return this.http.put(``, data);
    }

}