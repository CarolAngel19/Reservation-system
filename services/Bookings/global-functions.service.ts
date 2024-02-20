import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class GlobalFunctionsService{

    private userId!: number;

    /////////////////////////

    public get getUserId():number{
        return this.userId;
    }

    public set setUserId(value:number){
        this.userId = value;
    }

    /////////////////////////
}
  