System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this.heroesUrl = 'app/heroes'; // URL to web api
                    console.log('new service');
                }
                ;
                HeroService.prototype.getHeroes = function () {
                    return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(function (response) { return response.json().data; })
                        .catch(this.handleError);
                };
                HeroService.prototype.getHero = function (id) {
                    return this.getHeroes()
                        .then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService.prototype.delete = function (hero) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.heroesUrl + "/" + hero.id;
                    return this.http
                        .delete(url, headers)
                        .toPromise()
                        .catch(this.handleError);
                };
                HeroService.prototype.save = function (hero) {
                    if (hero.id) {
                        return this.put(hero);
                    }
                    return this.post(hero);
                };
                HeroService.prototype.handleError = function (error) {
                    console.error('An error occurred', error);
                    return Promise.reject(error.message || error);
                };
                HeroService.prototype.post = function (hero) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json' });
                    return this.http
                        .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
                        .toPromise()
                        .then(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                HeroService.prototype.put = function (hero) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = this.heroesUrl + "/" + hero.id;
                    return this.http
                        .put(url, JSON.stringify(hero), { headers: headers })
                        .toPromise()
                        .then(function () { return hero; })
                        .catch(this.handleError);
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map