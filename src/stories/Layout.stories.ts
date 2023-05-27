import {
  TeamOutlined,
  SmileOutlined,
  ControlOutlined,
  ProfileOutlined,
  DatabaseOutlined,
  HistoryOutlined,
  SkinOutlined,
  StarOutlined,
  SkypeOutlined,
  QqOutlined,
  MediumOutlined,
  AmazonOutlined,
  SketchOutlined,
} from '@ant-design/icons-vue';
import AppLayout from '../components/layout/Layout.vue';
import AppListData from './ApplistDrawer';
import AppSiderData from './Sider.stories';
import AppHeaderData from './Header.stories';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'UI/Layout/AppLayout',
  component: AppLayout,
  argTypes: {
    // Sider data
    siderData: {
      control: 'array',
      description:
        "Data to render the sider's structure. Allow second layer of data as child. 'Icon' is for a-icon, 'name' is display name, 'to' is the router url",
    },
    selectedKeys: {
      control: 'array',
      description: "Current selected menu item's key. It sould be synchronous with route.",
    },
    isConsole: {
      control: 'boolean',
      description: 'Show SSO console sider',
    },
    // App drawer list data
    appListDrawerData: {
      control: 'array',
      description:
        'An array to render app list drawer. It needs 3 attributes in each object: name, path, icon. If you need to use icon file, please use iconPath.',
    },
    selectAppListDrawerKey: {
      control: 'array',
      description: "Current selected app list drawer item's key. It sould be simulated with route.",
    },
    ver: {
      control: 'array',
      description: 'To identify the version of current product.',
    },
    // header data
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
    hideUI: {
      control: 'boolean',
      description: 'To hide header and sider of applayout.',
    },
    hideSider: {
      control: 'boolean',
      description: 'To hide sider of applayout.',
    },
    // bell notification
    bellCount: {
      control: 'number',
      description: 'Number ofthe badge shows, default is 0.',
    },
    // app drawer list action
    onClickAppListDrawerMenu: {
      action: 'clickAppListDrawerMenu',
      description:
        "Event name is `clickAppListDrawerMenu`. Triggered after user clicked app list drawer's item, it would return path of clicked item.",
    },
    // sider action
    onClickMenu: {
      action: 'clickMenu',
      description:
        "Event name is `clickMenu`. Triggered after user clicked sider's item, it would return path of clicked item.",
    },
    // header action
    onLogOut: {
      action: 'logOut',
      description: 'Event name is `logOut`. Emit function for logout',
    },
    onClickBell: {
      action: 'clickBell',
      description: 'Event name is clickBell. It would be triggered when the Bell clicked.',
    },
    content: {
      description: 'Slot reserve for app content.',
    },
  },
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Layout: Story = {
  render: (args) => ({
    components: {
      AppLayout,
      ControlOutlined,
      TeamOutlined,
      ProfileOutlined,
      DatabaseOutlined,
      HistoryOutlined,
      SmileOutlined,
      SkinOutlined,
      StarOutlined,
      SkypeOutlined,
      QqOutlined,
      MediumOutlined,
      AmazonOutlined,
      SketchOutlined,
    },
    setup() {
      return { args };
    },
    template: `
    <AppLayout v-bind="args">
      <template #appListDrawer_control>
        <ControlOutlined />
      </template>
      <template #sider_ControlOutlined>
        <ControlOutlined />
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
      <template #userMenu_team>
        <TeamOutlined />
      </template>
      <template #manageMenu_smile >
        <SmileOutlined />
      </template>

      <template #content>
        <div style="padding: 80px 30px; margin: 50px 30px;height: 100vh">
          <div style="background: #d4d4d4;padding:50px 30px;border-radius: 10px">
            <h1>Hello World</h1>
            <p>Welcome to UI Libraby</p>
            </div>
        </div>
      </template>
    </AppLayout>
  `,
  }),
  args: {
    hideUI: false,
    hideSider: false,
    isConsole: false,
    manageAuth: true,
    // selectAppListDrawerKey: ['3'],
    selectedKeys: ['3'],
    logoUrl: '/logo.png',
    logoLink: '#',
    manageMenu: [
      { name: 'Role Manage', url: '#', icon: 'smile' },
      { name: 'Stock Manage', url: '#', icon: 'smile' },
    ],
    userMenu: [{ name: 'Member', url: '#', icon: 'team' }],
    userInfo: {
      name: 'System User',
      avatar: 'SU',
    },
    siderData: [...AppSiderData.args.siderData],
    appListDrawerData: [...AppListData.args.appListDrawerData],
    ver: '2.0.0',
    bellCount: 5,
    bellDataStatus: 'ready',
    bellDataSource: AppHeaderData.args.bellDataSource,
  },
};
