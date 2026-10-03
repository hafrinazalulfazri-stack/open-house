import { access } from "node:fs/promises";
import { constants } from "node:fs";

await access(new URL("../dist/index.html", import.meta.url), constants.R_OK);
console.log("Static site is ready in dist/.");
