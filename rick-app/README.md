# RickApp
npm i bootstrap jquery @popperjs/core
styles:[
  "./node_modules/bootstrap/dist/css/bootstrap.min.css"
]
scripts: [
  "./node_modules/jquery/dist/jquery.min.js",
                "./node_modules/@popperjs/core/dist/umd/popper.min.js"

  "./node_modules/bootstrap/dist/js/bootstrap.min.js"

]

"node_modules/bootstrap/dist/css/bootstrap.min.css",

path alias-->tsconfig.json
 "paths": {
      "@app/*":["src/app/*"],
      "@shared/*":["src/app/shared/*"],
      "@enviroment/*":["src/enviroments/*"],
      "@pages/*":["src/app/components/pages*"],
      "@characters/*":["src/app/components/pages/characters*"]
    },

##
ng g c 

ng g c shared/componets/header

// genera el modulo y el componente
ng g m components/pages/home -m=app --route home
ng g m components/pages/characters
//
ng g m components/pages/characters/character-list -m=app --route character-list
--details
ng g m components/pages/characters/character-details -m=app --route character-details

//
ng g s
 

//
ngx-infinite-scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


##

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
