import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {

  constructor(private http:HttpClient) {

   }

   BaseUrl = 'http://gateway.marvel.com/v1/public/characters?limit=10&ts=1&apikey=8139c5099936a1b2bbd08f9ac12e9944&hash=8bd60be5b6b7adf824d2137c8c648cd3';

  allCharacters():Observable<any>
  {
    return this.http.get(this.BaseUrl);
  }

  allComics():Observable<any>
  {
    const comicUrl ='http://gateway.marvel.com/v1/public/comics?limit=10&ts=1&apikey=8139c5099936a1b2bbd08f9ac12e9944&hash=8bd60be5b6b7adf824d2137c8c648cd3';
    ;
    return this.http.get(comicUrl);
  }


  allSeries():Observable<any>
  {
    const seriesUrl ='http://gateway.marvel.com/v1/public/series?limit=10&ts=1&apikey=8139c5099936a1b2bbd08f9ac12e9944&hash=8bd60be5b6b7adf824d2137c8c648cd3';
    ;
    return this.http.get(seriesUrl);
  }

  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1&apikey=8139c5099936a1b2bbd08f9ac12e9944&hash=8bd60be5b6b7adf824d2137c8c648cd3`;
    return this.http.get(comicByCharacterUrl);
  }
  getSeriesByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `http://gateway.marvel.com/v1/public/characters/${characterId}/series?ts=1&apikey=8139c5099936a1b2bbd08f9ac12e9944&hash=8bd60be5b6b7adf824d2137c8c648cd3`;
    return this.http.get(comicByCharacterUrl);
  }


  getCharacterByName(characterName:string):Observable<any>
  {
    const characterBYNameUrl = `http://gateway.marvel.com/v1/public/characters?name=${characterName}&ts=1&apikey=8139c5099936a1b2bbd08f9ac12e9944&hash=8bd60be5b6b7adf824d2137c8c648cd3`;
    return this.http.get(characterBYNameUrl);
  }


}
