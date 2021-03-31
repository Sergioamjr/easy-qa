# Easy QA

> Upload and compare the markup design with your screen while you're coding.

[![NPM](https://img.shields.io/npm/v/easy-qa.svg)](https://www.npmjs.com/package/easy-qa) ![NPM](https://img.shields.io/npm/l/easy-qa) ![npm bundle size](https://img.shields.io/bundlephobia/min/easy-qa)

## Why

It's very difficult to create a pixel perfect screen switching your eyes between monitors, tabs and the designers always find a spacing, color, line height to be fixed when they're doing the QA.

Easy QA puts the design markup over your layout, so, you can see the differences between them, controlling its position, size and opacity.

Designers also can use the [official website](https://easy-qa.netlify.app/#/) to do a QA, entering an URL of a screen to inspect.

## Installation

```cmd
npm install -D easy-qa
// or
yarn add -D easy-qa
```

## Usage

Import the main component and wrap to top level of your application or page that you want to compare.

```javascript
import EasyQA from "easy-qa";

export default function App(props) {
  return (
    <EasyQA>
      <YourApplication {...props} />;
    </EasyQA>
  );
}
```

A button will appear on the right bottom of your page. Now you can upload an image and then control its size, position, opacity over your screen, reset its settings and delete the image.

## It's important to you know

- The localstorage's API is used to save your image as base64, its size limit is 10MB. If the cota is exceeded, it will not save/update but you can still use it.

- A layer with your uploaded image is put over your page, nevertheless, mouse's events, such as hover, click, focus on elements might not work properly.

## Contribution

Please, feel free to use it, open an issue or a pull request.

## License

MIT © [Sergioamjr](https://github.com/Sergioamjr)
