# UnGuessing UI

> UnGuessing UI is a Reac Component, created to help you build the perfect UI without struggle.

[![NPM](https://img.shields.io/npm/v/unguessing-ui.svg)](https://www.npmjs.com/package/unguessing-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![NPM](https://img.shields.io/npm/l/unguessing-ui) ![npm bundle size](https://img.shields.io/bundlephobia/min/unguessing-ui)

## Why

Have you ever tried to create a layout but it don't look the same? You have a design to guide you and great tools to inspect elements, you know CSS but it's looks different yet. Perhaps is because you're worried about the implementation, sprint's deadline, integration with backend services or just because you need to switch your eyes between screens and browsers tabs over and over again. It's too much to care about it and create the perfect UI.

UnGuessing UI was made to help you to create the perfect screen/component UI, looking the differences between your screen and the design while you're coding and your application is reloaded.

You just need to upload an image file of your layout page or component UI and than control its opacity, scale and position dragging it over the screen.

## Demo

![Demo](./doc/demo-component.gif)

## Install

```bash
npm install --save-dev unguessing-ui
```

or

```bash
yarn add --dev unguessing-ui
```

## Usage

```tsx
import React from 'react'
import UnGuessingUI from 'unguessing-ui'

class YourPage extends React.Component {
  ...
}

export default UnGuessingUI(YourPage)
```

## Limitations

### Z-Index and mouse interactions.

The uploaded image is used as background with a z-index property in a layer over your page. Nevertheless, the mouse's events, such as hover, click, focus on some elements, might doesn't works properly. Condering this, you should use Unguessing UI just to build and compare your design UI and not in the logic and process moment.

### Localstorage limit.

UnGuessing UI uses the localstorage to store your image, parsed into Base64, and the previous settings. By default, the size limit in Localstorage's browsers is 10MB. If the cota is exceeded, an warning is showed in console and will not save/update the data in localstorage. In this case, you'll need to compress, decrease the size or quality of your image file. You can use online services like [TinyPNG](https://tinypng.com) or [TinyJPG](https://tinyjpg.com/) to do this.

## License

MIT © [Sergioamjr](https://github.com/Sergioamjr)
