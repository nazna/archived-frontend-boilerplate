# frontend-boilerplate

> A boilerplate for Web frontend development | [febp.vercel.app](https://febp.vercel.app/)

![github actions](https://github.com/nazna/frontend-boilerplate/workflows/check-pull-request/badge.svg)
![dependabot](https://flat.badgen.net/badge/i/dependabot/0366d6?icon=dependabot&label)
![typescript](https://flat.badgen.net/badge/i/TypeScript/017acd?icon=typescript&label)
![vercel](https://flat.badgen.net/badge/i/Vercel/000000?icon=now&label)
![eslint](https://flat.badgen.net/badge/linter/eslint/4b32c3)
![stylelint](https://flat.badgen.net/badge/linter/stylelint/263238)
![prettier](https://flat.badgen.net/badge/formatter/prettier/ff69b4)
![emotion](https://flat.badgen.net/badge/styling/emotion/d36ac2)

## Usage

```sh
git clone git@github.com:nazna/frontend-boilerplate
npm install
npm run dev
```

## Logs

### v2.0.0

- Next.js の Incremental Static Regeneration を導入
  - ルーティングの実装がなくなったため react-router-dom を使っていたコードを参照するには [09eec65](https://github.com/nazna/frontend-boilerplate/commit/09eec65415e9c03ec7483e888b07268499ce1ffa)
- State 管理を Effector から Recoil に変更
