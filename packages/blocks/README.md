# MergeStat Blocks Library

MergeStat Blocks is a set of React components and hooks used to build pages MergeStat project.

## Setup

Instal the package by run command bellow

```sh
npm i @mergestat/blocks
```

import css assets into top level of component project.

```
import '@mergestat/blocks/styles/main.css'
```

## How to Publish to NPM

Go to `package.json` and upgrade the version manually.

```
{
  "name": "@mergestat/blocks",
  "version": "1.2.6",  <----------- <Upgrade here>
}
```

Then `login`, `build` and `publish`

```
npm login
```

```
npm run release
```

## How to use the Blocks

If you want to use components from the Blocks, check the [Storybook documentation](https://624b441a141307004a094f09-iskoqummxn.chromatic.com/)
