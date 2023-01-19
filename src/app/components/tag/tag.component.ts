import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {

  @Input('mensaje') mensaje: string = 'mensaje de prueba';
  @Input('tipo') tipo: string = 'info';
  constructor() { }

  ngOnInit() {}

}
