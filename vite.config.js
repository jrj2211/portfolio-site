import { resolve } from 'path';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import { faviconsPlugin } from '@darkobits/vite-plugin-favicons';

import postcssNesting from 'tailwindcss/nesting';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config.mjs';

export default defineConfig(async () => ({
  build: {
    target: 'esnext',
    outDir: '../dist',
  },
  resolve: {
    alias: [{ find: /^#/, replacement: `${resolve(__dirname, 'src')}/` }],
  },
  root: 'src',
  publicDir: resolve(__dirname, 'public'),
  server: {
    strictPort: true,
    host: true,
    port: '80',
    hmr: false,
  },
  css: {
    postcss: {
      plugins: [postcssNesting, tailwind(tailwindConfig), autoprefixer],
    },
  },
  plugins: [
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        assumptions: {
          setPublicClassFields: true,
        },
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            {
              version: '2018-09',
              decoratorsBeforeExport: true,
            },
          ],
          ['@babel/plugin-proposal-class-properties'],
          ['@babel/plugin-syntax-import-assertions'],
        ],
      },
    }),
    ViteYaml(),
    faviconsPlugin({
      icons: {
        favicons: {
          source: './src/assets/logo.png',
        },
      },
    }),
  ],
}));
