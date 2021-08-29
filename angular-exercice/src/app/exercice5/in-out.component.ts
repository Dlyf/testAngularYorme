import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {
  title = "Lorem ipsum";
  message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium maiores dolor architecto unde accusamus rerum esse nobis ratione expedita eaque! Accusantium alias tempore animi debitis hic rerum officia, consequatur repudiandae!";

  // @Input() message!: string;
  // @Output() parentUpdate = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  parentUpdate(event: string) {
    this.title = event;
  }
}
