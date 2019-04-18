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
  constructor(private heroesService: HeroesService, private router: Router) {}
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroesService.getHeroes().subscribe(
      response => {
        this.heroes = response as Hero[];
        console.log(this.heroes);
      },
      error => console.log(error)
    );
  }
  deleteHero(id) {
    this.heroesService.deleteHeroes(id).subscribe(
      response => {
        console.log(response);
        this.getHeroes();
        // this.router.navigate(['/heroes']);
      },
      error => {
        this.getHeroes();
        // this.router.navigate(['/heroes']);
      }
    );
  }
  updateHero(hero) {
    this.heroesService.openUpdateFrom(hero);
  }
}
