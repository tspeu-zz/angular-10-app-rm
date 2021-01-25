import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { Character } from '@shared/componets/interface/character.interface';
import { environment } from '@environments/environment';


// https://rickandmortyapi.com/api/character
// https://rickandmortyapi.com/api/character/?name=rick&status=alive
// https://rickandmortyapi.com/api/character/2

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  // get all o una
  searchCharacters(query = '', page = 1){
    const filter = `${environment.baseUrlAPI}character/?name=${query}&page=${page}`;
    console.log(filter);
    return this.http.get<Character[]>(filter);
  }

  // get detalle
  getDetails(id:number){
    return this.http.get<Character>(`${environment.baseUrlAPI}character/${id}`);
  }


}
