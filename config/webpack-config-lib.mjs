import { join } from "node:path";
import babelConfig from "./babel-config-lib.js";

function makeConfig(srcDir, distDir, optimize) {
  return {
    mode: "production",
    optimization: {
      minimize: !!optimize,
    },
    entry: join(srcDir, "index.tsx"),
    output: {
      path: distDir,
      filename: optimize ? "flow-ui.min.js" : "flow-ui.js",
      library: "FlowUI",
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.[tj]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              ...babelConfig({
                env: () => (optimize ? "production" : "development"),
              }),
            },
          },
        },
        {
          test: /\.s?css$/i,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    externals: {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react",
      },
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom",
      },
    },
  };
}

export default (srcDir, distDir) => [
  makeConfig(srcDir, distDir, true),
  makeConfig(srcDir, distDir, false),
];
