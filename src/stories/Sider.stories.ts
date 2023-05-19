import type { Meta, StoryObj } from '@storybook/vue3';
import {
  ProfileOutlined,
  DatabaseOutlined,
  HistoryOutlined,
  ControlOutlined,
  SmileOutlined,
  SkinOutlined,
  StarOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumOutlined,
  AmazonOutlined,
  SketchOutlined,
} from '@ant-design/icons-vue';
import Sider from '../components/layout/Sider.vue';

const meta = {
  title: 'UI/Layout/Sider',
  component: Sider,
  tags: ['autodocs'],
  argTypes: {
    siderData: {
      control: 'array',
      description:
        "Data to render the sider's structure. Allow second layer of data as child. 'Icon' is for a-icon, 'name' is display name, 'to' is the router url",
    },
    selectedKeys: {
      control: 'array',
      description: "Current selected menu item's key. It sould be synchronous with route.",
    },
    onClickMenu: {
      action: 'clickMenu',
      description:
        'Event name is `clickMenu`. Action triggered by clicking menu items. You can update `selectKey` by this function',
    },
  },
    args: {
    selectedKeys: ['1'],
    siderData: [
      {
        icon: 'ControlOutlined',
        name: 'Design',
        path: '/design',
        key: '1',
      },
      {
        icon: 'DatabaseOutlined',
        name: 'Management',
        path: '/management',
        key: '2',
      },
      {
        icon: 'ProfileOutlined',
        name: 'Engineering',
        path: '/engineering',
        key: '3',
      },
      {
        icon: 'HistoryOutlined',
        name: 'Media',
        path: '/media',
        key: '4',
      },
      // KEEP: to demo long sider
      {
        icon: 'SmileOutlined',
        name: 'Service',
        path: '/service',
        key: '5',
      },
      {
        icon: 'SkinOutlined',
        name: 'Finance',
        path: '/finance',
        key: '6',
      },
    ],
  },

} satisfies Meta<typeof Sider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const AppSider: Story = {
  render: () => ({
    components: {
      Sider,
      ProfileOutlined,
      DatabaseOutlined,
      HistoryOutlined,
      ControlOutlined,
      SmileOutlined,
      SkinOutlined,
      StarOutlined,
      SkypeOutlined,
      QqOutlined,
      MediumOutlined,
      AmazonOutlined,
      SketchOutlined,
    },
    template: `
    <sider v-bind="args">
      <template #sider_ControlOutlined>
        <ProfileOutlined />
      </template>
      <template #sider_DatabaseOutlined>
        <DatabaseOutlined />
      </template>
      <template #sider_ProfileOutlined>
        <ProfileOutlined />
      </template>
      <template #sider_HistoryOutlined>
        <HistoryOutlined />
      </template>
      <template #sider_SmileOutlined>
        <SmileOutlined />
      </template>
      <template #sider_SkinOutlined>
        <SkinOutlined />
      </template>
      <template #sider_StarOutlined>
        <StarOutlined />
      </template>
      <template #sider_SkypeOutlined>
        <SkypeOutlined />
      </template>
      <template #sider_QqOutlined>
        <QqOutlined />
      </template>
      <template #sider_MediumOutlined>
        <MediumOutlined />
      </template>
      <template #sider_AmazonOutlined>
        <AmazonOutlined />
      </template>
      <template #sider_SketchOutlined>
        <SketchOutlined />
      </template>
    </sider>
    `,
  }),
};
