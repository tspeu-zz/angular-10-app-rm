import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
//
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
//
import { Character } from '@shared/componets/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  // character: Character;
  character$: Observable<Character>;

  constructor(private route: ActivatedRoute,
              private charService: CharacterService,
              private location: Location) { }

  ngOnInit(): void {
    //buscar el personaje que vien por la url
    this.route.params.pipe( take(1) )
    .subscribe( (params) =>{
      const id = params['id'];
      this.character$ = this.charService.getDetails(id);
    });
  }

  onGoBack() {
    this.location.back();
    // window-history.back()
  }

}
