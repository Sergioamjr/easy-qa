import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
const dist = "dist";

export default {
  input: "src/index.ts",
  output: [
    {
      file: `${dist}/index.cjs.js`,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: `${dist}/index.esm.js`,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  external: ["styled-components", "react", "react-dom"],
  plugins: [external(), resolve(), typescript(), commonjs()],
};
