import { isCircular } from "https://cdn.jsdelivr.net/npm/@newdash/newdash-deno@5.18.0/isCircular.ts"

export function isCyclic(obj: any): boolean {
  return isCircular(obj)
}
