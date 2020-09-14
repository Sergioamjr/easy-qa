import external from "rollup-plugin-peer-deps-external";
import url from "@rollup/plugin-url";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import svgr from "@svgr/rollup";
const dist = "dist";

export default {
  input: "src/index.ts",
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    {
      name: "UnguessingUI",
      file: `${dist}/bundle.umd.js`,
      format: "umd",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url({}),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
};
