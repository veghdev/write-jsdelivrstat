import commonjs from "@rollup/plugin-commonjs";
import autoExternal from "rollup-plugin-auto-external";
import { terser } from "rollup-plugin-terser";

const path = require("path");

export default [
    {
        input: path.resolve(__dirname, "./src/jsdelivrstat.js"),
        output: {
            file: path.resolve(__dirname, "./dist/index.min.js"),
            format: "cjs",
            exports: "named",
        },
        plugins: [commonjs(), autoExternal(), terser()],
    },
];
