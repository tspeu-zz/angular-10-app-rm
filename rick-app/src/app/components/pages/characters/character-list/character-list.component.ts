import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { take, filter } from 'rxjs/operators';
//
import { Character } from '@shared/componets/interface/character.interface';
import { CharacterService } from '@shared/services/character.service';
//
type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  info: RequestInfo = {
    next: null,
  };
  private pageNum =1;
  private query: string;
  private hideScrollHeight: 200;
  private showScrollHeight: 500;

  constructor(private charService: CharacterService,
              private route: ActivatedRoute,
              private router: Router) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    // this.getDataFromService();
    this.getCharactersByQuery();
  }


  // detectar cuando cambnia la url
  private onUrlChanged() {
    this.router.events
      .pipe(filter( (event) => event instanceof NavigationEnd))
      .subscribe(
        () => {
          // limpiar resultados anteriores
          this.characters = [];
          this.pageNum = 1;
          this.getCharactersByQuery();
        }
      );
  }


  private getCharactersByQuery():void {
    this.route.queryParams.pipe(take(1))
      .subscribe( (params: ParamMap) => {
        console.log('params query->', params);
        this.query = params['q'];
        this.getDataFromService();
      });
  }

  //
  private getDataFromService(): void {
    this.charService
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
        .subscribe( (res:any) =>{
        console.log('res ->', res);

          if(res?.results?.length){
            const {info, results} = res;
            this.characters = [...this.characters, ...results]
            this.info = info;
          } else {
            this.characters = [];
          }
      });
  }

}
