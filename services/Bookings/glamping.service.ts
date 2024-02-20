import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import settings_json from '../../config/settings.json';
import { Observable, map } from "rxjs";
import { GlampingModel } from "models/glamping.model";


@Injectable({
    providedIn:'root',
})
export class GlampingService {

    api_base:string = settings_json.urlBase;
    api_glamping:string = settings_json.glamping;

    constructor(private http: HttpClient){}

    // Método para obtener todos los Glamping
    public getAllGlamping(): Observable<GlampingModel[]>{
        return this.http.get(`${this.api_base}${this.api_glamping}all`).pipe(
            map((response: any) => response as GlampingModel[])
        );    
    }

    // Método para crear un Glamping
    public createGlamping(data: any){
        return this.http.post(`${this.api_base}${this.api_glamping}`, data);
    }

    // Método para obtener un Glamping por su ID
    public getGlampingById(id:number){
        return this.http.get(`${this.api_base}${this.api_glamping}/${id}`);
    }

    // Método para eliminar un Glamping
    public deleteGlampingById(id:number){
        return this.http.delete(`${this.api_base}${this.api_glamping}/${id}`);
    }

    // Método para actualizar un Glamping
    public updateGlamping(id:number, data: any){
        return this.http.put(`${this.api_base}${this.api_glamping}/${id}`, data);
    }

}