import type { Meta, StoryObj } from '@storybook/vue3';
import Pencil from '../components/Pencil.vue';

const meta = {
  title: 'UI/Pencil',
  component: Pencil,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin: 2em"><story /></div>'})],
  argTypes: {
    text: {
      type: 'string',
      description: "The server's name.",
    },
    limitCount: {
      type: 'string',
      description: 'The maximum of the text.',
    },
    size: {
      options: ['default', 'small'],
      control: { type: 'select' },
      description: "The text's font size.",
    },
    apiError: {
      description: 'If error attribute is true, the component would switch to red style.',
    },
    apiErrorText: {
      type: 'string',
      description:
        'The text would be display when apiError attribute is true. Default is "Oops, the name is not unique, please choose another."',
    },
    invaildText: {
      type: 'string',
      description:
        'The text would be display when apiError attribute is true. Default is "Invalid name"',
    },
    onPressEnter: {
      action: 'pressEnter',
      description: "Trigger when user press enter and sent the input's value.",
    },
    onEditModeEvent: {
      action: 'editModeEvent',
      description: 'When edit mode is turn on or turn off, it would reply a boolean.',
    },
    onChange: {
      action: 'change',
      description: 'Event emit when input change.',
    },
    onTriggerInvalid: {
      action: 'triggerInvalid',
      description:
        'Event emit when invalid happends. It would be check when input change and press enter.',
    },
  },
} satisfies Meta<typeof Pencil>;

export default meta;
type Story = StoryObj<typeof meta>;

export const pencil: Story = {
  args: {
    text: 'The text would be display when apiError attribute is true. Default is The text would be',
    limitCount: 100,
    invaildText: 'Invalid name',
    apiErrorText: 'Name already exists!',
    apiError: false,
    size: 'default',
  },
};
