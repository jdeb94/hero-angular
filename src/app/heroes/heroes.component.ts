import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.model';
import { HeroesService } from '../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: '`app-heroes`',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private _heroesService: HeroesService, private router: Router) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this._heroesService.getHeroes()
      .subscribe(
        response => { this.heroes = <Hero[]>(response); console.log(this.heroes) },
        error => console.log(error)
      );
  }
  deleteHero(id) {
    this._heroesService.deleteHeroes(id)
      .subscribe(
        response => { console.log(response); this.router.navigate(['/heroes']); },
        error => { console.log(error); this.router.navigate(['/heroes']); }
      );
  }
  updateHero(hero) {
    this.router.navigate(['/new']);
  }

}
