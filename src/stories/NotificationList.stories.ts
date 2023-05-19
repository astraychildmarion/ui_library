import type { Meta, StoryObj } from '@storybook/vue3';
import NotificationList1 from '../components/BellList.vue';

const meta: Meta<typeof NotificationList1> = {
  title: 'UI/Notification List',
  component: NotificationList1,
  tags: ['autodocs'],
    argTypes: {
      isNoData: {
        control: {type: 'boolean'},
        description: 'demo description',
      },
      isShow: {
        control: {type: 'boolean'},
      },
      isShowLoading: {
        control: {type: 'boolean'},
      },
      dataSource: {
        control: 'object',
      },
      onInfiniteScroll: {
        action: 'infiniteScroll',
      },
      onClickOutside: {
        action: 'clickOutside',
      }
    },
}

export default meta;
type Story = StoryObj<typeof NotificationList1>;


export const NotificationList : Story = {
  args:{
    isShow: true,
    isShowLoading: true,
    isNoData: false,
    dataSource: [
      {
        title: 'Resize Success',
        subtitle: 'Compute Station',
        content: 'Server (IP, Host name) updated successfully!',
        timestamp: 1640169779329,
        id: '-4',
        read: false,
      },
      {
        title: 'Resize Success',
        content: 'Server (IP, Host name) updated successfully!',
        timestamp: 1640169779329,
        id: '-3',
        read: false,
      },
      {
        title: 'Resize Success',
        subtitle: 'Compute Station',
        content: 'Server (IP, Host name) updated successfully!',
        timestamp: 1640169779329,
        id: '-2',
        read: true,
      },
      {
        title: 'Resize Success',
        content: 'Server (IP, Host name) updated successfully!',
        timestamp: 1640169779329,
        id: '-1',
        read: true,
      },
      {
        title: 'Decom fail',
        content:
          'Server (IP, Host name) decommission failed, Cloud team will check and get back to you asap. We apologize for any inconvenience caused.',
        timestamp: 1640169779329,
        id: '0',
        read: true,
      },
      {
        title: 'Decom fail',
        content:
          'Server (IP, Host name) decommission failed, Cloud team will check and get back to you asap. We apologize for any inconvenience caused.',
        timestamp: 1640169779329,
        id: '1',
        read: true,
      },
      {
        title: 'Decom success',
        content:
          'Server (IP, Host name) is/ are now shut down with monitoring disabled. Infra will decommission the server(s) officially on (yyyy/mm/dd), please be noted.',
        timestamp: 1640169779329,
        id: '2',
        read: true,
      },
      {
        title: 'Decom success',
        content:
          'Server (IP, Host name) is/ are now shut down with monitoring disabled. Infra will decommission the server(s) officially on (yyyy/mm/dd), please be noted.',
        timestamp: 1640169779329,
        id: '3',
        read: true,
      },
      {
        title: 'Decom success',
        content:
          'Server (IP, Host name) is/ are now shut down with monitoring disabled. Infra will decommission the server(s) officially on (yyyy/mm/dd), please be noted.',
        timestamp: 1640129779329,
        id: '4',
        read: true,
      },
    ],
  }
};
