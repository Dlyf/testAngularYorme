import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-directive-attributs',
  templateUrl: './e-directive-attributs.component.html',
  styleUrls: ['./e-directive-attributs.component.css']
})
export class EDirectiveAttributsComponent implements OnInit {

  couleur = "coral";
  monStyle = {
    backgroundColor: 'blue'
  }

  maClasse = "txt";

  mesClasses = {
    txt: this.couleur == 'coral',
    error: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
