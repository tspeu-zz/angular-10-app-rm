import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecetaService } from 'src/app/services/receta.service';
import { Receta } from '../receta.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  receta: Receta;
  
  constructor(private activeRoute:ActivatedRoute,
              private recetaServ: RecetaService,
              private router: Router,
              public alertController: AlertController) { }

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

  //
  async onRecetaDelete(id: string){
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>Borrar the Receta</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            console.log('Confirm Okay');
            this.recetaServ.deleteReceta(this.receta.id);
            this.router.navigate(['/']);
          }
        }
      ]
    });

    await alert.present();
  }

}
