/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/philosophers-visualizer/",
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
