import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public data = null;
  constructor(private http: HttpClient, private router: Router) {}
  getHeroes() {
    return this.http.get('http://localhost:5450/hero');
  }
  saveHeroes(hero) {
    return this.http.post('http://localhost:5450/hero', hero);
  }
  deleteHeroes(id) {
    const options = id ? { params: new HttpParams().set('id', id) } : {};
    return this.http.delete('http://localhost:5450/hero', options);
  }
  openUpdateFrom(hero) {
    this.data = hero;
    this.router.navigate(['/new']);
  }
  updateHeroes(id, hero) {
    return this.http.put('http://localhost:5450/hero/' + id, hero);
  }
}
