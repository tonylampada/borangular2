System.register(['@angular/core', './hero.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, hero_service_1, router_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(heroService, router) {
                    this.heroService = heroService;
                    this.router = router;
                    this.heroes = [];
                }
                ;
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function (hero) {
                    this.router.navigate(['/detail', hero.id]);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: 'app/dashboard.component.html',
                        styleUrls: ['app/dashboard.component.css'],
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map