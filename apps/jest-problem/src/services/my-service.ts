import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MyService {
    public getMessage() {
        return 'Hello World!';
    }
}