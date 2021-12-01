# `@malept/eslint-config`

> Common ESLint configuration for JavaScript/TypeScript modules maintained by
> [`@malept`](https://npmjs.com/~malept).

## Usage

To install this ESLint configuration and its (base) peer dependencies:

```shell
# npm
npm install --save-dev @malept/eslint-config eslint eslint-plugin-{ava,import,node,prettier,promise} prettier
# yarn 1
yarn add --dev @malept/eslint-config eslint eslint-plugin-{ava,import,node,prettier,promise} prettier
```

Peer dependencies (see `package.json` for version details):

- `eslint`
- `eslint-plugin-ava`
- `eslint-plugin-import`
- `eslint-plugin-node`
- `eslint-plugin-prettier`
- `eslint-plugin-promise`
- `prettier` (due to `eslint-plugin-prettier`)

### JavaScript

Usage example:

```javascript
{
  extends: [
    // ...
    '@malept'
  ]
}
```

### TypeScript

Additional peer dependencies (see `package.json` for version details):

- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-tsdoc`

Usage example:

```javascript
{
  extends: [
    // ...
    '@malept/eslint-config/typescript'
  ]
}
```

## License

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)
