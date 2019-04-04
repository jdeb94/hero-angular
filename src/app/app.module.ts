import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';
import { CreateHeroComponent } from './create-hero/create-hero.component';

const appRoutes: Routes = [
  // { path:'',component:HeroesComponent,pathMatch:"full"},
  { path:'heroes',component:HeroesComponent},
  { path:'new',component:CreateHeroComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    CreateHeroComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
