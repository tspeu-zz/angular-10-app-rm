import { NgModule}  from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
//
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';


const routes: Routes  = [
  {path: '', component: GameControlComponent},
  {path: '/odd', component: OddComponent},
  {path: '/even', component: EvenComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
