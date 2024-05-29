import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "vite-plugin-dts";
import packageDefinition from "./package.json" assert { type: "json" };

const alias = {
    "@": path.resolve(__dirname, "src")
};

export default defineConfig(() => {
    return {
        build: {
            lib: {
                name: "symbol-db",
                entry: {
                    emoji: "src/db/emoji.ts",
                    material: "src/db/material.ts",
                }
            },
            rollupOptions: {
                external: Object.keys(packageDefinition.peerDependencies || {})
            }
        },
        plugins: [
            vue(),
            dts(),
            visualizer()
        ],
        resolve: {
            alias
        }
    };
});
