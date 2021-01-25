import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../services/receta.service';
//
import {  Receta} from './receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  recetas: Receta[] = [];
 

  constructor(private recetaServ: RecetaService) { }

  ngOnInit() {
    this.recetas = this.recetaServ.getAllRecetas();
  }

 
}
