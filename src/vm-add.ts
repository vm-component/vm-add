// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { version } from "../package.json"

export default function add(a: number, b: number) {
  console.log(version)
  return a + b + ":" + version
}
