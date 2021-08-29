import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-j-service',
  templateUrl: './j-service.component.html',
  styleUrls: ['./j-service.component.css']
})
export class JServiceComponent implements OnInit {
  
  compteur: number;
  compteurAbonnement!: Subscription;

  constructor(private numberService: NumberService) {
      // console.log(this.numberService.compteur);
      this.compteur = this.numberService.compteur;
  }

  ngOnInit(): void {
    this.compteurAbonnement = this.numberService.onCompteurUpdate.subscribe(
      (nouvelleValeur) => this.compteur = nouvelleValeur
    );
  }

  onClickHandler()
 {
   this.numberService.incrementer();
 }

 ngOnDestroy() {
   this.compteurAbonnement.unsubscribe();
 }
}
