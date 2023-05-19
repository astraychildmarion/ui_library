import { TeamOutlined, SmileOutlined } from '@ant-design/icons-vue';
import MyHeader from '../components/layout/Header.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'UI/Layout/Header',
  component: MyHeader,
  tags: ['autodocs'],
  argTypes: {
    manageAuth: {
      control: 'boolean',
      description: 'Authority/Permission to show the Manage section.',
    },
    logoLink: {
      control: 'text',
      description: 'A href for logo.',
    },
    manageMenu: {
      control: 'array',
      description: 'Menu items of manage menu, including item text and link',
    },
    userMenu: {
      control: 'array',
      description: 'User items of user menu, including item text, link and icon key',
    },
    userInfo: {
      control: 'object',
      description:
        'User information, including user name and avatar. Avatar is ant design avatar, please prepare content you want to show.',
    },
    bellCount: {
      control: 'number',
      description: 'Number ofthe badge shows, default is 0.',
    },
    bellDataSource: {
      control: 'array',
      description: "Data for bell's notification.",
    },
    bellDataStatus: {
      options: ['loading', 'compete', 'ready'],
      control: { type: 'select' },
      description:
        'Please set `loading` when you throw API request for notification data, then set to `ready` after the request complete. Set to `complete` for loading to the last page of data.',
    },
    onLogOut: {
      action: 'logOut',
      description: 'Event name is `logOut`. Emit function for logout',
    },
    onClickTopLeftCorner: {
      action: 'clickTopLeftCorner',
      description: 'Event name is `clickTopLeftCorner`. To control app list drawer.',
    },
    onClickBell: {
      action: 'clickBell',
      description: 'Event name is clickBell. It would be triggered when the Bell clicked.',
    },
  },
  args: {
    manageAuth: true,
    manageMenu: [
      { name: 'Upgrade', url: '#', icon: 'smile' },
      { name: 'Billing', url: '#', icon: 'smile' },
      { name: 'Security', url: '#', icon: 'smile' },
    ],
    userMenu: [{ name: 'Profile', url: '#' }],
    userInfo: {
      name: 'System User',
      avatar: 'SU',
    },
    bellCount: 5,
    bellDataStatus: 'ready',
    bellDataSource: [
      {
        title: 'Task Completion',
        content:
          'Congratulations! The task has been successfully completed. Great job!',
        date: '2022/11/13',
        id: '10',
        read: false,
      },
      {
        title: 'Task Completion',
        content:
          'Congratulations! The task has been successfully completed. Great job!',
        date: '2022/11/13',
        id: '12',
        read: false,
      },
      {
        title: 'Error Encountered',
        content:
          'Oops! An error occurred. We apologize for the inconvenience caused. Please try again later.',
        date: '2022/11/07',
        id: '32',
        read: true,
      },
      {
        title: 'Error Encountered',
        content:
          'Oops! An error occurred. We apologize for the inconvenience caused. Please try again later.',
        date: '2022/11/07',
        id: '31',
        read: true,
      },
      {
        title: 'Error Encountered',
        content:
          'Oops! An error occurred. We apologize for the inconvenience caused. Please try again later.',
        date: '2022/11/06',
        id: '54',
        read: true,
      },
    ],
  }
} satisfies Meta<typeof MyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  render: () => ({
    components: { MyHeader, TeamOutlined, SmileOutlined },
    template: `
    <my-header v-bind="args">
      <template #userMenu_team>
        <TeamOutlined />
      </template>
      <template #manageMenu_smile>
        <SmileOutlined />
      </template>
    </my-header>
    `,
  }),
}
