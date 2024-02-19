import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root',
})
export class GlampingService {

    private settingsUrl = '../../config/settings.json';

    constructor(private http: HttpClient){}

    // Método para obtener todos los Glamping
    public getAllGlamping(){
        return this.http.get(``);
    }

    // Método para crear un Glamping
    public createGlamping(data: any){
        return this.http.post(``, data);
    }

    // Método para obtener un Glamping por su ID
    public getGlampingById(){
        return this.http.get(``);
    }

    // Método para eliminar un Glamping
    public deleteGlampingById(){
        return this.http.delete(``);
    }

    // Método para actualizar un Glamping
    public updateGlamping(data: any){
        return this.http.put(``, data);
    }

}