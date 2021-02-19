# Purrrfect UI

> Purrrfect UI is a React Component, created to help you build the perfect UI without struggle.

[![NPM](https://img.shields.io/npm/v/react-perfectui.svg)](https://www.npmjs.com/package/react-perfectui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![NPM](https://img.shields.io/npm/l/react-perfectui) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-perfectui)

## Why

Have you ever tried to create a layout but it don't look the same? You have a design to guide you and great tools to inspect elements, you know CSS but it's looks different yet. Perhaps is because you're worried about the implementation, sprint's deadline, integration with backend services or just because you need to switch your eyes between screens and browsers tabs over and over again. It's too much to care about it and create the perfect UI.

Purrrfect UI was made to help you to create the perfect screen/component UI, looking the differences between your screen and the design while you're coding and your application is reloaded.

You just need to upload an image file of your layout page or component UI and than control its opacity, scale and position dragging it over the screen.

## Install

```bash
npm install --save-dev purrrfect-ui
```

or

```bash
yarn add --dev purrrfect-ui
```

## Usage

```tsx
import React from 'react'
import PurfectUI from 'purrrfect-ui'

function YourPage(props) {
  return(
    //...
  )
}

export default PurfectUI(YourPage)
```

## License

MIT © [Sergioamjr](https://github.com/Sergioamjr)
