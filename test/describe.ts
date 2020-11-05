// @ts-nocheck
import { expect } from "https://cdn.jsdelivr.net/gh/Soontao/expect@0.3.1/mod.ts";
import { gray, green } from "https://deno.land/std@0.76.0/fmt/colors.ts";

window.expect = expect;

const greenName = (...parts: string[]) => {
  return parts.map(green).join(" > ");
};

const grayName = (...parts: string[]) => {
  return parts.map(gray).join(" > ");
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
      name: ignore ? grayName(suite, name) : greenName(suite, name),
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
