import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-g-input',
  templateUrl: './g-input.component.html',
  styleUrls: ['./g-input.component.css']
})
export class GInputComponent implements OnInit {

  // @Input() message: string | undefined;
  @Input() message!: string;
  @Input('listProduits') produits!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
