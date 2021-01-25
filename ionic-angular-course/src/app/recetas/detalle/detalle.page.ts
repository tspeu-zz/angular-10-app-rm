import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from 'src/app/services/receta.service';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  receta: Receta;
  
  constructor(private activeRoute:ActivatedRoute, private recetaServ: RecetaService) { }

  ngOnInit() {
    //get url params
    this.activeRoute.paramMap.subscribe(paraMap =>{
      if(!paraMap.has('recetaId')){
        return;
      }
      const id = paraMap.get('recetaId');
      this.receta = this.recetaServ.getReceta(id);
      console.log(this.receta);
      
    });
  }

}
