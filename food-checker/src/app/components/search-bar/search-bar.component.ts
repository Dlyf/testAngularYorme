import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // @Output() searchUpdate = new EventEmitter<string>();
  constructor(private navigationService: NavigationService) {

   }

  ngOnInit(): void {
  }

  envoyerRecherche(event: any) {
    const nomRecherche = event.target.search.value;
    // this.searchUpdate.emit(nomRecherche);
    this.navigationService.updateProduitChercher(nomRecherche);
    event.preventDefault();
  }
}
