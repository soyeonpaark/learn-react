<<<<<<< HEAD
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import pluginReact from "@vitejs/plugin-react";

const viteConfig = defineConfig({
  base: "/",
  server: {
    host: "localhost",
=======
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import pluginReact from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  base: '/',
  server: {
    host: 'localhost',
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4
    port: 3000,
  },
  plugins: [
    pluginReact({
<<<<<<< HEAD
      jsxRuntime: "automatic",
=======
      jsxRuntime: 'automatic',
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4
    }),
  ],
  resolve: {
    alias: {
<<<<<<< HEAD
      "@": fileURLToPath(new URL("./src", import.meta.url)),
=======
      '@': fileURLToPath(new URL('./src', import.meta.url)),
>>>>>>> 76bea16fd502ed1bdf187379666c891a12997fc4
    },
  },
});

export default viteConfig;
