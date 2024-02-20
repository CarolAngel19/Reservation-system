import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import settings_json from '../../config/settings.json';
import { Observable, map } from "rxjs";
import { UserModel } from "models/users.model";

@Injectable({
    providedIn:'root',
})
export class UserService {

    api_base:string = settings_json.urlBase;
    api_users:string = settings_json.user;

    constructor(private http: HttpClient){}

    // Método para obtener todos los usuarios
    public getAllUsers(){
        return this.http.get(`${this.api_base}${this.api_users}/all`);
    }

    public getUserByName(name:string): Observable<UserModel>{
        return this.http.get(`${this.api_base}${this.api_users}name/${name}`).pipe(
            map((response: any) => response as UserModel)
        );    
    }
        

    // Método para crear un usuario
    public createUser(data: any){
        return this.http.post(`${this.api_base}${this.api_users}`, data);
    }

    // Método para obtener un usuario por su ID
    public getUsersById(id:number){
        return this.http.get(`${this.api_base}${this.api_users}/${id}`);
    }

    // Método para eliminar un usuario
    public deleteUserById(id:number){
        return this.http.delete(`${this.api_base}${this.api_users}/${id}`);
    }

    // Método para actualizar un usuario
    public updateUser(id:number, data: any){
        return this.http.put(`${this.api_base}${this.api_users}/${id}`, data);
    }

}