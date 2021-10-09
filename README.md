# MisJuegos

Plattform used to check the status of all your games at a glance.

This plattform is develop used Vue 3 + Typescript + Vite + Tailwind for the UI. This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Project setup

Technologies used:

- Vite
- Vue 3 + TS
- Tailwind (UI)
- Firebase (along vuefire) to autenticate users and to store user data
- Route management with Vue Router 4.x
- State management with Vuex 4.x
- Husky + lint-staged git hooks to lint all the code in the staging area and to test (with jest) the application just before the commit
- EsLint aong with prettier to style and format the code
- Unit testing with Jest

### Instalation

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
# First build the app
npm run build

# Then test the prod build in your local environment
npm run serve
```

### Deploy

```bash
# Don't forget to build (and test) the app first
$ npm run deploy
# or
$ firebase deploy
```

**Important**
In order to deploy, you need to have installed **Firebase** in your local machine. In case you dont have it, please do it, and after, login with your Firebase account (the one you have permissions in 2GoTours):

```bash
$ npm install -g firebase-tools
$ firebase login
```

### Lints and fixes files

```bash
npm run lint
```

### Test the app

```bash
npm run test
```
