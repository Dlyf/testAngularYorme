import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  compteur = 0;
  title = 'angular-formation';
  produits = ['lorem', 'ipsum', 'Dolor'];

  afficherMessage(event:any) {
    console.log(event);
  }
  incrementerParent(event: any) {
    this.compteur = event;
  }
}
