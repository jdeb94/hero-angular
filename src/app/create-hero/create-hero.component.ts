import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero } from '../hero/hero.model';
import { HeroesService } from '../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {
  createHero: FormGroup;
  id: string;
  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    if (this.heroesService.data === null) {
      this.createHero = new FormGroup({
        heroName: new FormControl(null),
        heroHeight: new FormControl(null),
        heroType: new FormControl(null),
        canFly: new FormControl(null),
        fanFollowing: new FormControl(null),
        superPower: new FormControl(null),
        fightsWon: new FormControl(null)
      });
    } else {
      this.createHero = new FormGroup({
        heroName: new FormControl(this.heroesService.data.heroName),
        heroHeight: new FormControl(this.heroesService.data.heroHeight),
        heroType: new FormControl(this.heroesService.data.heroType),
        canFly: new FormControl(this.heroesService.data.canFly),
        fanFollowing: new FormControl(this.heroesService.data.fanFollowing),
        superPower: new FormControl(this.heroesService.data.superPower),
        fightsWon: new FormControl(this.heroesService.data.fightsWon)
      });
      this.id = this.heroesService.data._id;
    }
  }
  onSubmit() {
    if (this.id === undefined) {
      this.createHero.value.superPower = this.createHero.value.superPower.split(
        [',']
      );
      this.heroesService.saveHeroes(this.createHero.value).subscribe(
        response => {
          this.router.navigate(['/heroes']);
        },
        error => {
          this.router.navigate(['/heroes']);
        }
      );
    } else {
      this.heroesService.updateHeroes(this.id, this.createHero.value).subscribe(
        response => {
          this.router.navigate(['/heroes']);
        },
        error => {
          this.router.navigate(['/heroes']);
        }
      );
    }
  }
}
