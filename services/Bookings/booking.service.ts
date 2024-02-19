import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root',
})
export class BookingService {

    private settingsUrl = '../../config/settings.json';

    constructor(private http: HttpClient){}

    // Método para obtener todos los Booking
    public getAllBooking(){
        return this.http.get(``);
    }

    // Método para crear un Booking
    public createBooking(data: any){
        return this.http.post(``, data);
    }

    // Método para obtener un Booking por su ID
    public getBookingById(){
        return this.http.get(``);
    }

    // Método para eliminar un Booking
    public deleteBookingById(){
        return this.http.delete(``);
    }

    // Método para actualizar un Booking
    public updateBooking(data: any){
        return this.http.put(``, data);
    }

}