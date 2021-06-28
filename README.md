# SMPlace Vue
SMPlace Vue is a study project done in [Vue3](https://v3.vuejs.org/), with the objective of approaching the best structural practices of a Single Page project, using [Routing](https://v3.vuejs.org/guide/routing.html) and [Vuex](https://vuex.vuejs.org/) for state control.

> Note: The nature of this project is just didactic. For an e-commerce, the best approach would be to use a [Server-Side Rendering](https://v3.vuejs.org/guide/ssr.html).


## Project Structure
The structure of this project was based on componentization by context, thus facilitating the understanding of the project and reducing collateral impacts of future maintenance.

### Folder Structure
Below we can see the basic structure of the project.
```
./
├── test/
└── src/
    ├──── assets/
    ├──── components/
    ├──── database/
    ├──── router
    ├──── store/
    ├──── views/
        ├──── [pages]/
            ├──── components/
            ├────  [Page].vue
    ├──── App.vue
    └──── main.js
```

#### `src/components/`
In this folder are the components that are available in the context of the application's management (App.vue) and/or that will be imported by different components of the project.

#### `src/views/`
Here are all the components of the main routes like Home, Product and Cart. This level will also contain exclusive child components, that is, those that belong only to the route component and will not be imported in another part of the project.

#### `src/store/`
Here the state control files and logic are organized. Its organization was based on the pattern [Duck Pattern](https://dev.to/code_ashish/modular-ducks-a-design-pattern-for-scalable-redux-architecture-4dna)

#### `test/`
Here are the project test files. Currently only the [Jest](https://jestjs.io/pt-BR/) test framework is being used, but others may be added in the future if necessary.

## How to execute
To run this project just run some of the commands listed below:

- `yarn serve` To run in development mode;
- `yarn build` To transpire the project to be published;
- `yarn test` To run unit tests with Jest.

## Dependencies
This project has some important dependencies for its operation, they are as follows:

- [vue3-notification](https://www.npmjs.com/package/@kyvg/vue3-notification);
- [vuex](https://www.npmjs.com/package/vuex);
- [vue-router](https://www.npmjs.com/package/vue-router);
- [vue-i18n](https://www.npmjs.com/package/vue-i18n);
- [sass](https://www.npmjs.com/package/sass);
- [sass-loader](https://www.npmjs.com/package/sass-loader);
- [vue-jest](https://www.npmjs.com/package/vue-jest);

## Contributors

**@author:** Felipe Augusto Feitosa
_-- Email: [felipe.aufe@gmail.com](mailto:felipe.aufe@gmail.com.)_
_-- Github: [felipeaufe](https://github.com/felipeaufe)_