import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// On indique à Angular que notre service
@Injectable({
    providedIn: 'root'
})
export class NumberService {
    compteur = 0;
    onCompteurUpdate = new Subject<number>();

    incrementer() {
        this.compteur++;
        this.onCompteurUpdate.next(
            this.compteur
        );
    }
}