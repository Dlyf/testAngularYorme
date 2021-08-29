import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l-pipes',
  templateUrl: './l-pipes.component.html',
  styleUrls: ['./l-pipes.component.css']
})
export class LPipesComponent implements OnInit {

  message = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores dolore sit cum nemo consequatur temporibus cumque ratione, alias in nobis corrupti, at ipsa a itaque reiciendis impedit? Ratione, facilis dolorum?"
  dateDuJour = new Date();

  langue = 'fr';

  constructor() { }

  ngOnInit(): void {
  }
  changerLangue(langue: string) {
      this.langue = langue;
  }
}
