import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import external from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-ts";

export const createRollupConfig = (
  /** @type {import("rollup").RollupOptions} */ config
) =>
  defineConfig({
    input: "./src/index.ts",
    output: [
      {
        file: "./build/cjs/index.cjs",
        format: "cjs",
        interop: "auto",
      },
      {
        file: "./build/esm/index.mjs",
        format: "esm",
      },
    ],
    plugins: [external(), resolve(), commonjs(), typescript()],
    ...config,
  });
