import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/emplettes.client/app/", "src/emplettes.server/app.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,
});
