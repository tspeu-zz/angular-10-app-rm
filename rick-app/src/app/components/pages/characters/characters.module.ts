import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//
// import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterComponent } from '@characters/character.component';

const charComponent = [
  CharacterDetailsComponent,
  CharacterListComponent,
  CharacterComponent
];

@NgModule({
  declarations: [...charComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports :[...charComponent]
})
export class CharactersModule { }
