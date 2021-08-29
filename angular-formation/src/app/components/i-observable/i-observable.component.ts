import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Utilisateur } from '../../classes/Utilisateur';

@Component({
  selector: 'app-i-observable',
  templateUrl: './i-observable.component.html',
  styleUrls: ['./i-observable.component.css']
})
export class IObservableComponent implements OnInit {

  utilisateurs: Utilisateur[] = [];
  nombres: number[] = [];
  tempsConnexion!: Subscription
  // Injection de dépendance
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    of(1,2,3,5).pipe( filter(n => n > 2)).subscribe()
    this.getNombres().subscribe(
      (nombres: number[]) => this.nombres = nombres,
      (error) => { console.error(error);},
      () => {console.log() }
    );

    interval(1000).subscribe(
      (valeur) => console.log("Temps de connexion: " + valeur)
    );

    this.tempsConnexion = interval(1000).subscribe(
      (valeur) => console.log(
        "Temps de connexion " + valeur
      )
    )
  }

  ngOnDestroy() {
    this.tempsConnexion.unsubscribe();
  }

  getNombres() {
    const nombres = of([1, 2, 3, 5] );
    return nombres;
  }

  getNombresMan() {
    const prenoms = ['Melanie', 'Rick', 'Joe', 'Marine'];
    const prenomsObs = new Observable(
      (observer) => observer.next(prenoms)
    );
    return prenomsObs;
  }

  getUtiliateurs() {
    this.http.get<Utilisateur[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (reponse) => {
        console.log(reponse);
        this.utilisateurs = reponse}
    )
  }

}
