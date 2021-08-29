import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  produitChercher = "";
  onProduitChercherUpdate = new Subject<string>();
  constructor() { }

  updateProduitChercher(nouveauProduit: string) {
    this.produitChercher = nouveauProduit;
    this.onProduitChercherUpdate.next(this.produitChercher)
  }
}
