module.exports = {
  presets: [
    [
      "@babel/env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: ["babel-plugin-styled-components"],
};
