import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import settings_json from '../../config/settings.json';
import { Observable, map } from "rxjs";
import { BookingModel } from "models/booking.model";

@Injectable({
    providedIn:'root',
})
export class BookingService {

    api_base:string = settings_json.urlBase;
    api_booking:string = settings_json.booking;

    constructor(private http: HttpClient){}

    // Método para obtener todos los Booking
    public getAllBooking(): Observable<BookingModel[]>{
        return this.http.get(`${this.api_base}${this.api_booking}all`).pipe(
            map((response: any) => response as BookingModel[])
        );
    }

    // Método para crear un Booking
    public createBooking(data: any){
        return this.http.post(`${this.api_base}${this.api_booking}`, data);
    }

    // Método para obtener un Booking por su ID
    public getBookingById(id:number){
        return this.http.get(`${this.api_base}${this.api_booking}/${id}`);
    }

    // Método para eliminar un Booking
    public deleteBookingById(id:number){
        return this.http.delete(`${this.api_base}${this.api_booking}/${id}`);
    }

    // Método para actualizar un Booking
    public updateBooking(id:number, data: any){
        return this.http.put(`${this.api_base}${this.api_booking}/${id}`, data);
    }

}