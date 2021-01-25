import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecetasPageRoutingModule } from './recetas-routing.module';

import { RecetasPage } from './recetas.page';
import { RecetaItemComponent } from '../receta-item/receta-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecetasPageRoutingModule
  ],
  declarations: [RecetasPage, RecetaItemComponent]
})
export class RecetasPageModule {}
