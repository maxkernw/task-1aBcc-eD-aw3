import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Data<T> {
    public storage: T;
    public constructor() { }

    public clearStorage() {
        this.storage = null;
    }

}