import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  directives: [HeroDetailComponent],
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    public heroes: Hero[];

    constructor(
      private heroService: HeroService,
      private router: Router) { };

    onSelect(hero: Hero) { 
      this.selectedHero = hero;
    }
    getHeroes() {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
      this.getHeroes()
    }
    gotoDetail(){
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
