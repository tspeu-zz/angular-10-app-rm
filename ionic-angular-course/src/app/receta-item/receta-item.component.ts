import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../recetas/receta.model';

@Component({
  selector: 'app-receta-item',
  templateUrl: './receta-item.component.html',
  styleUrls: ['./receta-item.component.scss'],
})
export class RecetaItemComponent implements OnInit {

  @Input() receta: Receta;

  constructor() { }

  ngOnInit() {}

}
