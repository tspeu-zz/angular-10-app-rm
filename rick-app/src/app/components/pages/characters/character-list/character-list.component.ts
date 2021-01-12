import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { take, filter } from 'rxjs/operators';
//
import { DOCUMENT } from '@angular/common';
//
import { Character } from '@shared/componets/interface/character.interface';
import { CharacterService } from '@shared/services/character.service';
import { inject } from '@angular/core/testing';
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
  showGoUp = false;


  constructor(
            @Inject(DOCUMENT) private document: Document,
              private charService: CharacterService,
              private route: ActivatedRoute,
              private router: Router) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    // this.getDataFromService();
    this.getCharactersByQuery();
  }

  //escucha un evento del DOM
  //cunado sucede el evento ejecuta el metodo
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if( (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight) {
          this.showGoUp = true;
      }
    else if(this.showGoUp && (yOffSet || this.document.documentElement.scrollTop ||
          this.document.body.scrollTop ) < this.hideScrollHeight){
              this.showGoUp = false;
    }
  }
  //
  onScrollDown() {
      if(this.info.next) {
        this.pageNum++;
        this.getDataFromService();
      }
  }

  // al tope te la pagina uo
  onScrollTop(): void {
    this.document.body.scrollTop = 0; // safari
    this.document.documentElement.scrollTop = 0; // all browser
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
