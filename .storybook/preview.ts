import type { Preview } from "@storybook/vue3";

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'abalone',
      values: [
        {
          name: 'abalone',
          value: '#fafafa',
        },
        {
          name: 'watermark',
          value: '#ebebeb',
        },
      ],
    },
  },
};

export default preview;
