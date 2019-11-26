# frontend-boilerplate

> A boilerplate for Web frontend development

<p style="margin-top:8px;text-align=center">
  <a href="https://github.com/naoya3e/frontend-boilerplate/actions?query=workflow%3ABuild">
    <img src="https://github.com/naoya3e/frontend-boilerplate/workflows/Build/badge.svg" target="_blank" rel="noopener noreferrer">
  </a>
  <a href="https://dependabot.com/">
    <img src="https://flat.badgen.net/badge/i/dependabot/0366d6?icon=dependabot&label" target="_blank" rel="noopener noreferrer">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://flat.badgen.net/badge/i/TypeScript/017acd?icon=typescript&label" target="_blank" rel="noopener noreferrer">
  </a>
  <a href="https://zeit.co">
    <img src="https://flat.badgen.net/badge/i/now/000000?icon=now&label" target="_blank" rel="noopener noreferrer">
  </a>
  <a href="https://eslint.org">
    <img src="https://flat.badgen.net/badge/linter/eslint/4b32c3" target="_blank" rel="noopener noreferrer">
  </a>
  <a href="https://stylelint.io/">
    <img src="https://flat.badgen.net/badge/linter/stylelint/263238" target="_blank" rel="noopener noreferrer">
  </a>
  <a href="https://prettier.io">
    <img src="https://flat.badgen.net/badge/formatter/prettier/ff69b4" target="_blank" rel="noopener noreferrer">
  </a>
  <a href="https://emotion.sh">
    <img src="https://flat.badgen.net/badge/styling/emotion/d36ac2" target="_blank" rel="noopener noreferrer">
  </a>
</p>

## Usage

```sh
git clone git@github.com:naoya3e/frontend-boilerplate
cd .env.example .env
npm install
npm run serve
```

## Todos

- [ ] GitHub Actions を統一して jobs if を利用するように変更する
- [ ] actions/zeit-now が 404 になって削除されたみたいなので修正する

## References

- [GitHub Actions – new workflow syntax features](https://github.blog/changelog/2019-10-01-github-actions-new-workflow-syntax-features/)
- [Contexts and expression syntax for GitHub Actions](https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions)
- [cla-assistant/.github/workflows/build.yml](https://github.com/cla-assistant/cla-assistant/blob/c6121e94b11bde06497b6526addb86537334f254/.github/workflows/build.yml)
