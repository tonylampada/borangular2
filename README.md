# 1. O que é isso?

Minha implementação pro [tutorial oficial do Angular2](https://angular.io/docs/ts/latest/tutorial/)
* [Live demo com Typescript](https://tonylampada.github.io/borangular2/tourheroes_ts/gh.html) (Tour of heroes)
* [Live demo com Javascript](https://tonylampada.github.io/borangular2/tourheroes_js/) (Quickstart)

# 2. O que vc achou do Angular2?

Antes de ouvir minha opinião, devo dizer que ainda sei muito pouco sobre o Angular2 - a gente só deu uns amassos e pra conhecer um framework de verdade, não tem jeito - só casando.

Dito isso, eu gostei do que vi até agora. Ele "amarra" um pouco mais a estrutura do projeto, mas isso "força" uma adoção das boas práticas que a gente aprendeu trabalhando com Angular 1.x. Por exemplo: tudo é modular e componentizado. Você até consegue "sair do trilho" e fazer alguma gambiarra, mas é muito mais fácil aceitar as decisões que o framework já tomou e "andar na linha".

Apesar disso, eu ainda não acho que ele está bom o suficiente pra ser usado em produção, num projeto crítico que precisa ir pro ar amanhã. Mas meu sentimento é que estamos chegando lá.

# 3. O que aprendeu fazendo esse tutorial?

Rapaz, um monte de coisa. Vou fazer uma lista delas abaixo.

* Você pode usar mais de uma linguagem (Javascript, Dart, Typescript) pra trabalhar com o framework.
* Typescript é um superset do javascript. Ou seja, [typescript = javascript + sintaxes adicionais], sendo que essas sintaxes adicionais permitem fazer coisas que JS não faz, como criar variáveis com tipo, classes, funções lambda, etc. Mas dentro de um arquivo .ts vc pode escrever código js normalmente que também funciona.
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
 * Se parece um pouco com a estrutura [diretiva + serviço-modelo] que a gente viu no ng-masters (e que eu vivo recomendando pra galera implementar no ANgular 1.x), só que sem um controller ou um $scope no meio.
* Aliás, o conceito de $scope já era. Foi pro saco.
* Uma **rota** deve ser associada diretamente a um componente. Essa é uma diferença conceitual importante pro Angular 1.x, onde rotas são associadas a *templates*
* Um componente pode ser roteado ou não. Por exemplo, o componente *HeroDetailComponent* (que permite editar uma entidade "Hero") pode "receber um Hero" pra editar através da rota (caso 1.3 na árvore acima); ou pode receber um Hero através do componente pai (caso 1.1.1)
* No Angular2 existem **classes injetáveis**, que fazem mais ou menos o papel dos **serviços** que a gente cria no Angular1.x (usando o método .factory() ou .service())
* O ciclo de vida das instâncias dessas classes injetáveis **depende da estrutura da árvore onde se encaixam os componentes aonde essas instâncias são injetadas**. Isso é *completamente diferente* (e mais complicado) do que acontece com os serviços do Angular 1.x, onde tudo é singleton.
* O CSS dos componentes, por padrão fica junto do código do componente, que nem eu faço no [djangular3](https://github.com/tonylampada/djangular3) ;-)
* O Angular2 vem com o **in-memory-web-api** que é um jeito mais "nativo" de fazer um implementação mockada do seu backend, muito parecido com o mock-api que aparece no [djangular3](https://github.com/tonylampada/djangular3)

# 4. O que falta aprender.

* Qual o melhor jeito de empacotar uma aplicação Angular2 pra produção (budle, minify, tals)
* Qual o melhor jeito de colocar o sass dentro da build do projeto.
* Typescript. É outra linguagem, negão. Tem que aprender - ou então caga e vai programar com JS mesmo, que também pode ser uma opção
* System.js. No tutorial ele recomenda usar esse cara que é um "carregador de arquivos js" pra sua página. Meu entendimento de como usar e como ele funciona ainda tá muito meia boca.
* Entender melhor como usar o "in-memory-web-api" pra fazer mocks de chamadas http
* Testes - qual o melhor caminho pra fazer testes unitários

