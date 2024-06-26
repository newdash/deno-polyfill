// deno-lint-ignore-file no-explicit-any
import { expect } from "../expect/mod.ts";
import { cyan, gray } from "https://deno.land/std@0.223.0/fmt/colors.ts";

(window as any).expect = expect;

const colorName = (color: (value: string) => string, ...parts: string[]) => {
  return color(parts.join(" > "));
};

const describe = (
  suite: string,
  fn: (...args: any[]) => void,
  ignoreSuite = false,
) => {
  const it = (
    name: string,
    fn: (...args: any[]) => void,
    ignore = ignoreSuite,
  ) => {
    Deno.test({
      name: ignore
        ? colorName(gray, suite, name)
        : colorName(cyan, suite, name),
      fn,
      ignore,
      sanitizeResources: false,
      sanitizeOps: false,
    });
  };

  it.skip = (name: string, fn: (...args: any[]) => void) => {
    return it(name, fn, true);
  };

  fn(it);
};

describe.skip = (suite: string, fn: (...args: any[]) => void) => {
  return describe(suite, fn, true);
};

export { describe };
