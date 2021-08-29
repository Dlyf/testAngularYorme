import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})
export class ParamsComponent implements OnInit {

  nom!: string;

  constructor(
    private route: ActivatedRoute) { 
      console.log(this.route);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => this.nom = params.name
    );
  }

}
