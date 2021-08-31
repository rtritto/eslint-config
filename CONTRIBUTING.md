# Contributing to `@malept/eslint-config`

Contributions are encouraged, however please keep in mind that these are personal ESLint
configurations, so proposed changes may end up being rejected for purely aesthetic reasons.

## Configuration philosophy

Stick to the "recommended" lints as much as possible and avoid overriding rules unless there's a
good reason. When overriding rules, add a comment for why it's there.

## Dependency updates

Dependency updates are automatically managed via Dependabot. Please do not file pull requests for
dependency updates unless given permission to do so.

## Feature requests

New rules or plugins should have an issue filed with the reason why it should be added. If there is no reason specified, or the reason doesn't make any sense _(at the discretion of the maintainer)_, the request will be closed.

## Pull requests

- Pull request titles should adhere to the [conventional commits
  specification](https://www.conventionalcommits.org/en/v1.0.0/)
- Pull request reviews should conform to the [conventional comments
  format](https://conventionalcomments.org/)

## Releases

Requires npm 2FA. At some point, Semantic Release + CFA may be used.

Use `npm version` as appropriate, then:

```shell
git push && git push --tags
npm publish
```
