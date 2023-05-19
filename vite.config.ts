import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
  VantResolve,
  ElementPlusResolve,
  NutuiResolve,
  AntdResolve,
} from 'vite-plugin-style-import';
import dts from 'vite-plugin-dts';
import { childrenComponent }  from './build/ant-design-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      formats: ['es'],
      name: 'lib_01',
      fileName: (format) => `lib_01.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'ant-design-vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        dir: 'dist',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 傳入共用的全域變數scss
        additionalData: `
        @import "@/assets/scss/index.scss";
        `,
      },
      // ant-design customize theme
      less: {
        // 改 ant design 主題色
        modifyVars: {
          'primary-color': '#0488C5',
          'font-family': 'Roboto',
        },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    vue(),
    dts(),
    createStyleImportPlugin({
      resolves:[
        AndDesignVueResolve(),
        VantResolve(),
        ElementPlusResolve(),
        NutuiResolve(),
        AntdResolve(),
      ],
      libs: [
        // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            // These are "Children Components", it's no need to import their styles.
            const ignoreList = childrenComponent;
            return ignoreList.includes(name) ? '' : `ant-design-vue/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  define: {'process.env':{}},
  server: {
    port: 6010,
  },
});
