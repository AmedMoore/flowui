import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import chalk from "chalk";

export const __dirname = dirname(fileURLToPath(import.meta.url));

function calculateExecutionTime(startTime) {
  const time = performance.now() - startTime;
  return time >= 1000 ? `${(time / 1000).toFixed(1)}s` : `${time.toFixed(1)}ms`;
}

export function step(name, fn) {
  return async () => {
    try {
      console.log(chalk.cyan(name), chalk.gray("..."));
      const startTime = performance.now();
      await fn();
      console.log(
        chalk.green(name),
        chalk.gray(`done in ${calculateExecutionTime(startTime)}`),
      );
    } catch (err) {
      console.log(chalk.red("Error:"), `(${chalk.white(name)})`, err);
      process.exit(1);
    }
  };
}

export function pick(obj, props) {
  return props.reduce((pre, cur) => ({ ...pre, [cur]: obj[cur] }), {});
}

export function exclude(obj, props) {
  return pick(
    obj,
    Object.keys(obj).filter((prop) => !props.includes(prop)),
  );
}
