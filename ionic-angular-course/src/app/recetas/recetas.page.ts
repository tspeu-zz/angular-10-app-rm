import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecetaService } from '../services/receta.service';
//
import {  Receta} from './receta.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit, OnDestroy {

  recetas: Receta[] ;


  constructor(private recetaServ: RecetaService) { }

  ngOnInit() {
    console.log('OnINIT');
    console.log(this.recetas);
  }
  
  ionViewWillEnter() {
    this.recetas = this.recetaServ.getAllRecetas();
    console.log('->ionViewWillEnter');
    console.log(this.recetas);
  }
  
  ionViewDidEnter() {
    console.log('*->ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave -->');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave--**-->');
  }

  ngOnDestroy() {
    console.log('on destroy');
  }


}
