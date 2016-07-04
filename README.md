# 1. O que é isso?

Minha implementação pro [tutorial oficial do Angular2](https://angular.io/docs/ts/latest/tutorial/)
* [Live demo com Typescript](https://tonylampada.github.io/borangular2/tourheroes_ts/gh.html) (Tour of heroes)
* [Live demo com Javascript](https://tonylampada.github.io/borangular2/tourheroes_js/) (Quickstart)

# 2. O que vc achou do Angular2?

Antes de ouvir minha opinião, devo dizer que ainda sei muito pouco sobre o Angular2 - a gente só deu uns amassos e pre conhecer um framework de verdade, não tem jeito - só casando.

Dito isso, eu gostei do que vi até agora. Ele "amarra" um pouco mais a estrutura do projeto, mas isso "força" uma adoção das boas práticas que a gente aprendeu trabalhando com Angular 1.x. Por exemplo: tudo é modular e componentizado. Você até consegue "sair do trilho" e fazer alguma gambiarra, mas é muito mais fácil aceitar as decisões que o framework já tomou e "andar na linha".

Apesar disso, eu ainda não acho que ele está bom o suficiente pra ser usado em produção, num projeto crítico que precisa ir pro ar amanhã. Mas meu sentimento é que estamos chegando lá.

# 3. O que aprendeu fazendo esse tutorial?

Rapaz, um monte de coisa. Vou fazer uma lista delas abaixo.

* Você pode usar mais de uma linguagem (Javascript, Dart, Typescript) pra trabalhar com o framework.
* Typescript é claramente o "favorito" (do Google). Tanto é que se vc procurar o [tutorial pra Javascript](https://angular.io/docs/js/latest/tutorial/index.html), veja o que diz: `This chapter is not yet available in JavaScript. We recommend reading the TypeScript version.`, isso aih pra mim é "joguinho sujo" pra estimular a adoção do Typescript. Ô GOOGLE, EU NÃO NASCI ONTEM NÃO VIU! SEU SAFADO!
* Uma aplicação Angular2 é uma árvore de componentes, que pode ter rotas.
* Exemplo da estrutura de componentes e rotas do "Tour of Heroes" em typescript:

```
1 (C) AppComponent
-- 1.1 (R) heroes = (C) HeroesComponent  //listar heroes
---- 1.1.1 (C) HeroDetailComponent  //Formulario pra criar um Hero
-- 1.2 (R) dashboard = (C) DashboardComponent //"home" de heroes
-- 1.3 (R) detail/:id = (C) HeroDetailComponent //Formulario pra editar um hero
```

* Um componente é um pedaço de tela que o usuário pode interagir. Um componente Angular2:
 * Tem um **template** html (view)
 * Pode ter um conjunto de estilos (css) que valem apenas pro componente
 * Tem uma **classe** que implementa o comportamento do componente (model)
 * Pode depender de outros componentes e também de serviços externos que o Angular injeta (na **classe** do componente)
* Uma **rota** deve ser associada diretamente a um componente. Essa é uma diferença conceitual importante pro Angular 1.x, onde rotas são associadas a *templates*
* Um componente pode ser roteado ou não. Por exemplo, o componente *HeroDetailComponent* (que permite editar uma entidade "Hero") pode "receber um Hero" pra editar através da rota (caso 1.3 na árvore acima); ou pode receber um Hero através do componente pai (caso 1.1.1)
