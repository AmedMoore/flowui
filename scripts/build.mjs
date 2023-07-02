import { resolve, join, extname, dirname, parse as parsePath } from "node:path";
import { readdir, readFile, writeFile } from "node:fs/promises";
import fse, { ensureDir, remove } from "fs-extra";
import { execa } from "execa";
import webpack from "webpack";
import postcss from "postcss";
import semver from "semver";
import { __dirname, step } from "./utils.mjs";
import webpackConfig from "../config/webpack-config-lib.mjs";
import postcssConfig from "../config/postcss-config-lib.js";

const rootDir = resolve(__dirname, "..");
const configDir = join(rootDir, "config");
const libSrcDir = join(rootDir, "src", "lib");
const libDistDir = join(rootDir, "dist");
const umdOutputDir = join(libDistDir, "umd");
const globalStylesInputFile = join(libSrcDir, "styles.scss");
const combinedStylesOutputFile = join(libDistDir, "styles.scss");
const compiledStylesOutputFile = join(libDistDir, "styles.css");

const clean = step("Clean output dir", async () => {
  await remove(libDistDir);
});

const buildTypeDeclarations = step("Build type declarations", async () => {
  await execa(
    "tsc",
    ["--project", `"${join(configDir, "tsconfig-lib.json")}"`],
    { shell: true },
  );
});

const buildUmd = step("Build 'umd' library", async () => {
  await new Promise((resolve, reject) => {
    webpack(webpackConfig(libSrcDir, umdOutputDir), async (err, stats) => {
      if (err || stats.hasErrors()) {
        return reject(err ?? stats.toJson().errors[0].message);
      }
      resolve();
    });
  });
});

async function getSourceFiles() {
  const sources = [];
  const walk = async (dir) => {
    const files = await readdir(dir, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile() && /\.[tj]sx?$/.test(extname(file.name))) {
        sources.push(join(dir, file.name));
      } else if (file.isDirectory()) {
        await walk(join(dir, file.name));
      }
    }
  };
  await walk(libSrcDir);
  return sources;
}

async function transformFiles({ env, outputDir }) {
  await execa(
    "babel",
    [
      `"${libSrcDir}"`,
      "--extensions .ts,.tsx",
      "--config-file",
      `"${join(configDir, "babel-config-lib.js")}"`,
      "--out-dir",
      `"${join(libDistDir, outputDir)}"`,
      "--env-name",
      `"${env}"`,
    ],
    { shell: true },
  );
}

const buildCjs = step("Build 'cjs' modules", async () => {
  await transformFiles({ env: "commonjs", outputDir: "cjs" });
});

const buildEsm = step("Build 'esm' modules", async () => {
  await transformFiles({ env: "esm", outputDir: "esm" });
});

const buildStyles = step("Build styles", async () => {
  const globalStylesInput = await readFile(globalStylesInputFile, {
    encoding: "utf-8",
  });

  const combinedStylesOutput = await readFile(compiledStylesOutputFile, {
    encoding: "utf-8",
  });

  const combinedStyles = `${globalStylesInput}\n\n${combinedStylesOutput}`;

  const compiledStyles = await postcss(postcssConfig.plugins).process(
    combinedStyles,
    { from: globalStylesInputFile, to: compiledStylesOutputFile },
  );

  await writeFile(combinedStylesOutputFile, combinedStyles);
  await writeFile(compiledStylesOutputFile, compiledStyles.css);
});

function proxyFile(file) {
  const root = file.index ? ".." : "../..";
  return {
    sideEffects: false,
    main: join(root, "cjs", file.dirname, `${file.filename}.js`),
    module: join(root, "esm", file.dirname, `${file.filename}.js`),
    types: join(root, "types", file.dirname, `${file.filename}.d.ts`),
  };
}

function getProxyPathForSource(src) {
  return {
    dirname: dirname(src).replace(libSrcDir, ""),
    filename: parsePath(src).name,
    index: parsePath(src).name === "index",
  };
}

const writeNodeProxyFiles = step("Write node proxy files", async () => {
  const sources = await getSourceFiles();
  const proxyFiles = sources.map(getProxyPathForSource);
  for (const file of proxyFiles) {
    const dirname = join(
      libDistDir,
      file.dirname,
      file.index ? "" : file.filename,
    );
    await ensureDir(dirname);
    const filename = join(dirname, "package.json");
    await fse.writeJson(filename, proxyFile(file), { spaces: 2 });
  }
});

const copyStaticFiles = step("Copy static files", async () => {
  const pkgJson = await fse.readJson(join(rootDir, "package.json"));

  await fse.writeJson(
    join(libDistDir, "package.json"),
    { ...pkgJson, scripts: {} },
    { spaces: 2 },
  );

  for (const file of ["LICENSE", "README.md", "tailwind.config.js"]) {
    await fse.copy(join(rootDir, file), join(libDistDir, file));
  }
});

function release() {
  const index = process.argv.findIndex((arg) => arg === "--version");
  const version = process.argv[index + 1];
  return [
    "ignore",
    "major",
    "minor",
    "patch",
    "premajor",
    "preminor",
    "prepatch",
    "prerelease",
  ].includes(version)
    ? version
    : "minor";
}

const updatePkgVersion = step("Upgrade version", async () => {
  const pkg = await fse.readJson(join(rootDir, "package.json"));
  pkg.version = semver.inc(pkg.version, release(), "alpha");
  await fse.writeJson(join(rootDir, "package.json"), pkg, { spaces: 2 });
});

step("Build library", async () => {
  await clean();
  await buildTypeDeclarations();
  await Promise.all([buildUmd(), buildCjs(), buildEsm()]);
  await buildStyles();
  await writeNodeProxyFiles();
  if (release() !== "ignore") {
    await updatePkgVersion();
  }
  await copyStaticFiles();
})();
