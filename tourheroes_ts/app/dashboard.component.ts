import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private router: Router) { };

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
    gotoDetail(hero: Hero) {
        this.router.navigate(['/detail', hero.id]);
    }
}