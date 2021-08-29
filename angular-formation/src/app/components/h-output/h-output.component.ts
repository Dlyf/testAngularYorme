import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-h-output',
  templateUrl: './h-output.component.html',
  styleUrls: ['./h-output.component.css']
})
export class HOutputComponent implements OnInit {
  @Input() compteurEnfant!: number
  @Output() messageUpdate = new EventEmitter<string>();
  @Output() myIncrementerCompteur = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  sendEvent() {
    const message = 'Salut !';
    this.messageUpdate.emit(message);
  }

  incrementation() {
    const valeur = this.compteurEnfant + 1;
    this.myIncrementerCompteur.emit(valeur);
  }

}
