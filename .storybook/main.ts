import type { StorybookConfig } from "@storybook/vue3-vite"; 
import path from 'path'
import { childrenComponent } from '../build/ant-design-vue';
import {
  createStyleImportPlugin,
  AndDesignVueResolve,
  VantResolve,
  ElementPlusResolve,
  NutuiResolve,
  AntdResolve,
} from 'vite-plugin-style-import';
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: { builder: "@storybook/builder-vite" },
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async(config: any) => {
    const customConfig = {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
            @import "src/assets/scss/index.scss";
            `,
          },
          less: {
            javascriptEnabled: true,
            // modifyVars: theme,
          },
        },
      },
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    };

    config.plugins.push(
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
    );
    return { ...config, ...customConfig} 
  }
}
export default config;
