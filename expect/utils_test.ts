import { assert } from "https://deno.land/std@0.223.0/testing/asserts.ts";
import { isPromise } from "./utils.ts";

Deno.test({
  name: "utils.isPromise",
  fn: async () => {
    const p = new Promise(() => {});
    assert(isPromise(p));
  },
});
