import { Component, Input, OnInit, Output } from '@angular/core';
import {EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {


  @Input() clic: boolean;
  @Output() clickEvent = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {}

  emitClick(){
    this.clickEvent.emit(true);

  }

}
