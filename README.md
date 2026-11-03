# vue-frogger

Requires Node.js 22.12+ (Node 24 recommended) and npm.

```sh
npm ci
npm run serve
```

```sh
npm run build       # TypeScript checks and production bundle in dist/
npm run lint
npm run test:unit
npx playwright install --with-deps chromium
npm run test:e2e
npm audit
```

Vue 3 provides the Composition API directly. Vite replaces Vue CLI/Webpack;
Vitest and Playwright replace the legacy Jest/Cypress plugins.
The npm lockfile is authoritative; use npm ci for reproducible installations.
The Vuex type path in tsconfig works around Vuex 4's missing types export.

Security overrides keep `minimatch` and `glob` on patched major versions while
upstream lint/test tools still request vulnerable older majors. Build, lint and
unit checks cover their current consumers; review these overrides on tool updates.
