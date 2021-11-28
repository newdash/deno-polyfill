import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { isCyclic } from "./cycle.ts";

Deno.test("test isCycle", () => {

  const obj1: any[] = []
  const obj2: any = { obj3: undefined }
  const obj3 = { obj2: obj2 }
  assertEquals(isCyclic(obj1), false)
  assertEquals(isCyclic(obj2), false)
  obj2.obj3 = obj3
  assertEquals(isCyclic(obj3), true)

})