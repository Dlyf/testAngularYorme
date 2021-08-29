import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iii-directives-structurelles',
  templateUrl: './iii-directives-structurelles.component.html',
  styleUrls: ['./iii-directives-structurelles.component.css']
})
export class IiiDirectivesStructurellesComponent implements OnInit {
  
  isActive = true;
  prenoms = ['John', 'Maude', 'Rick', 'Ella'];
  prenom = "Coucou";

  constructor() {
    console.log("Constructor");  
  }

  ngOnInit(): void {
    console.log("Initialisation du composant");
  }

}
