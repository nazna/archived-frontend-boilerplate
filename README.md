# frontend-boilerplate

> A boilerplate for Web frontend development | [febp.vercel.app](https://febp.vercel.app/)

![deploy-weekly](https://github.com/nazna/frontend-boilerplate/workflows/deploy-weekly/badge.svg)
![master-merge](https://github.com/nazna/frontend-boilerplate/workflows/master-merge/badge.svg)
![pull-request](https://github.com/nazna/frontend-boilerplate/workflows/pull-request/badge.svg)

## Usage

```sh
git clone git@github.com:nazna/frontend-boilerplate
npm ci
npm run dev
```

## Changelog

### v2.0.0

- Next.js を導入
  - [react-router-dom](https://github.com/ReactTraining/react-router) によるルーティング実装の参考 [09eec65](https://github.com/nazna/frontend-boilerplate/commit/09eec65415e9c03ec7483e888b07268499ce1ffa)
- State 管理を [effector](https://github.com/effector/effector) から [Recoil](https://github.com/facebookexperimental/Recoil) に変更
