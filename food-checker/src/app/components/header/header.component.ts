import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output() envoyerRecherche = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  // updateRecherche(event: string) {
  //   // console.log("Nom du produit: " + event);
  //   this.envoyerRecherche.emit(event);
  // }

}
