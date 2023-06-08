const sass = require("sass");

function preprocessCss(data) {
  return (
    sass.compileString(data, {
      syntax: "scss",
    }).css + "\n\n"
  );
}

const modules = (env) => env !== "esm" && "commonjs";

module.exports = (api) => ({
  presets: [
    ["@babel/preset-typescript"],
    [
      "@babel/preset-env",
      {
        modules: modules(api.env()),
        loose: false,
        useBuiltIns: false,
      },
    ],
    ["@babel/preset-react"],
  ],
  plugins: [
    [
      "css-modules-transform",
      {
        extensions: [".css", ".scss"],
        generateScopedName: "FlowUI-[local]-[hash:base64:5]",
        extractCss: "./dist/styles.css",
        preprocessCss,
      },
    ],
  ],
  ignore: [/@babel[\\|/]runtime/],
});
