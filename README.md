# UnGuessing UI

> Create perfect UI without struggle.

[![NPM](https://img.shields.io/npm/v/unguessing-ui.svg)](https://www.npmjs.com/package/unguessing-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![NPM](https://img.shields.io/npm/l/unguessing-ui) ![npm bundle size](https://img.shields.io/bundlephobia/min/unguessing-ui)

## Why

Have you ever tried to create a layout but it didn't look the same? We have a design, great tools to debug, we know CSS but it's looks different yet. Perhaps is because we're worry about the implementation, sprint's deadline, integration with backend or just because we need to switch our eyes between screens and browsers tabs over and over again. It's too much to care about it and create the perfect UI.

UnGuessing UI was made to help you to create the perfect screen/component UI, looking the differences between your screen and the design while you're coding and your application is reloaded.

You just need to upload an image file and than controll its opacity, position and scale.

## Demo

![Demo](https://i.imgur.com/BBK3TGV.gif)

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

UnGuessing UI uses the localstorage to store your image, parsed into Base64, and the previous settings. By default, the size limit in Localstorage is 10MB. If the cota is exceeded, an warning is showed in console and will not save/update the data in localstorage. In this case, you'll need to decrease the size or quality of your image file.

## License

MIT © [Sergioamjr](https://github.com/Sergioamjr)
