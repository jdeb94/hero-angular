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
  constructor(private _heroesService:HeroesService,private router: Router) { }

  ngOnInit() {
    this.createHero = new FormGroup({
      "heroName": new FormControl(null),
      "heroHeight": new FormControl(null),
      "heroType": new FormControl(null),
      "canFly": new FormControl(null),
      "fanFollowing": new FormControl(null),
      "superPower": new FormControl(null),
      "fightsWon": new FormControl(null)
    });
  }
  onSubmit(){
    //console.log(this.createHero.value);
    //console.log(this.createHero.value.superPower.split([","]));
    this.createHero.value.superPower = this.createHero.value.superPower.split([","]);
    //console.log(this.createHero.value.superPower);
    //return;
    this._heroesService.saveHeroes(this.createHero.value).subscribe(
      response=>{
         console.log(response);
         console.log(11);
        this.router.navigate(['/heroes']);
      },
      error=>{
        console.log(error);
        this.router.navigate(['/heroes']);
      }

    )
  }

}
