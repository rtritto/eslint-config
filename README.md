# `@malept/eslint-config`

> Common ESLint configuration for JavaScript/TypeScript modules maintained by
> [`@malept`](https://npmjs.com/~malept).

## Usage

```shell
# npm
npm install --save-dev @malept/eslint-config
# yarn 1
yarn add --dev @malept/eslint-config
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
