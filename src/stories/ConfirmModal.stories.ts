import type { Meta, StoryObj } from '@storybook/vue3';
import ConfirmModal from '../components/ConfirmModal.vue';

const meta = {
  title: 'UI/Confirm',
  component: ConfirmModal,
  tags: ['autodocs'],
    argTypes: {
      confirmType: {
        options: ['safe', 'info', 'warning', 'danger'],
        control: { type: 'select' },
      },
      onClickConfirm: {
        action: 'click',
        description: 'Event name is "clickConfirm".',
      },
      onClickCancel: {
        action: 'click',
        description: 'Event name is "clickCancel".',
      },
      cancelButtonText: {
        type: 'string',
        description: 'Text to show on button, default is Cancel.',
      },
      confirmButtonText: {
        type: 'string',
        description: 'Text to show on button, default is Confirm',
      },
    },
} satisfies Meta<typeof ConfirmModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfirmModalArgs: Story = {
  args : {
    isShow: true,
    confirmType: 'info',
    title: 'message title',
    content: 'message content,message content, message content, message content',
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
  }
}
