# @dimasrakas/uikit

Sharing reusable Vue.js components with Lerna and Storybook

## Install

```bash
# with npm
npm install
lerna bootstrap

# with yarn
yarn install
lerna bootstrap

```

## Development & Deployment

```bash
# with npm
npm run storybook         #localhost
npm run build-storybook   #production

# with yarn
yarn storybook            #localhost
yarn build storybook      #production
```

## Testing

```bash
# with npm
npm run test
npm run test -u             #reset snapshots

# with yarn
yarn test
yarn test -u              #reset snapshots
```
