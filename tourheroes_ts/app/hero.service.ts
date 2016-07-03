import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';  // URL to web api
    constructor(private http: Http) {
        console.log('new service');
    };
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                   .toPromise()
                   .then(response => response.json().data)
                   .catch(this.handleError);
    }
    getHero(id: number) {
        return this.getHeroes()
                   .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
    delete(hero: Hero) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = `${this.heroesUrl}/${hero.id}`;

      return this.http
                 .delete(url, headers)
                 .toPromise()
                 .catch(this.handleError);
    }
    save(hero: Hero): Promise<Hero>  {
      if (hero.id) {
        return this.put(hero);
      }
      return this.post(hero);
    }    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    private post(hero: Hero): Promise<Hero> { // add new hero
      let headers = new Headers({
        'Content-Type': 'application/json'});

      return this.http
                 .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
                 .toPromise()
                 .then(res => res.json().data)
                 .catch(this.handleError);
    }
    
    private put(hero: Hero) { // Update existing Hero
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let url = `${this.heroesUrl}/${hero.id}`;

      return this.http
                 .put(url, JSON.stringify(hero), {headers: headers})
                 .toPromise()
                 .then(() => hero)
                 .catch(this.handleError);
    }
}
