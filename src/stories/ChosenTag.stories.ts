import type { Meta, StoryObj } from '@storybook/vue3';
import ChosenTag from '../components/ChosenTag.vue';

const meta: Meta<typeof ChosenTag> = {
  title: 'UI/Chosen Tag',
  tags: ['autodocs'],
  component: ChosenTag,
    argTypes: {
      text: {
        type: 'string',
        description: "The server's name.",
      },
      limitCount: {
        control: {type: 'number'},
        description: 'The maximium of text.',
      },
      readonly: {
        control: {type: 'boolean'},
        description: 'To control write ability of component.',
      },
      onRenameTag: {
        action: 'renameTag',
        description: "Trigger when user press enter and sent the input's value.",
      },
      onDeleteTag: {
        action: 'deleteTag',
        description: "Trigger when user press trash bin and sent the input's value.",
      },
      onChooseTag: {
        action: 'chooseTag',
        description: 'Trigger when user choose a tag.',
      },
      onCancelTag: {
        action: 'cancelTag',
        description: 'Trigger when user cancel to choose a tag.',
      },
      onEditModeEvent: {
        action: 'editModeEvent',
        description: 'Trigger when user switch editmode',
      },
    },
};

export default meta;
type Story = StoryObj<typeof ChosenTag>

export const ChosenTagArgs: Story = {
  args: {
    text: 'Story book',
    limitCount: 50,
    readonly: false,
  }
};
