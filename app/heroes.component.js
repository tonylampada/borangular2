System.register(['@angular/core', './hero-detail.component', './hero.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, hero_detail_component_1, hero_service_1, router_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(heroService, router) {
                    this.heroService = heroService;
                    this.router = router;
                    this.addingHero = false;
                }
                ;
                HeroesComponent.prototype.onSelect = function (hero) {
                    this.selectedHero = hero;
                    this.addingHero = false;
                };
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes()
                        .then(function (heroes) { return _this.heroes = heroes; })
                        .catch(function (error) { return _this.error = error; });
                };
                HeroesComponent.prototype.addHero = function () {
                    this.addingHero = true;
                    this.selectedHero = null;
                };
                HeroesComponent.prototype.close = function (savedHero) {
                    this.addingHero = false;
                    if (savedHero) {
                        this.getHeroes();
                    }
                };
                HeroesComponent.prototype.deleteHero = function (hero, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.heroService
                        .delete(hero)
                        .then(function (res) {
                        _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
                        if (_this.selectedHero === hero) {
                            _this.selectedHero = null;
                        }
                    })
                        .catch(function (error) { return _this.error = error; });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['/detail', this.selectedHero.id]);
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        directives: [hero_detail_component_1.HeroDetailComponent],
                        templateUrl: 'app/heroes.component.html',
                        styleUrls: ['app/heroes.component.css'],
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map