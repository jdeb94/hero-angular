import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private _http: HttpClient) { }
  getHeroes() {
    return this._http.get("http://localhost:5450/hero")
  }
  saveHeroes(hero){
    return this._http.post("http://localhost:5450/hero",hero);
  }
  deleteHeroes(id){
    const options = id ?
   { params: new HttpParams().set("id",id) } : {};
    return this._http.delete("http://localhost:5450/hero",options);
  }
  openUpdateFrom(id){
    
  }
}
