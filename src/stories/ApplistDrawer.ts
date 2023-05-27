import type { Meta, StoryObj } from '@storybook/vue3';
import {   
  ProfileOutlined,
  ControlOutlined,
  SmileOutlined,
  SketchOutlined,
  StarOutlined,
  SkypeOutlined} from '@ant-design/icons-vue';
import Applist from '../components/layout/ApplistDrawer.vue';

const meta = {
  title: 'UI/Layout/ApplistDrawer',
  component: Applist,
  argTypes: {
    appListDrawerShow: {
      control: 'boolean',
      description: 'Show or hide app list drawer.',
    },
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
    onClickAppListDrawerMenu: {
      action: 'clickAppListDrawerMenu',
      description:
        "Triggered after user clicked app list drawer's item, it would return path of clicked item.",
    },
  },
  args: {
    ver: '1.0.0',
    appListDrawerShow: true,
    // selectAppListDrawerKey: ['2'],
    appListDrawerData: [
      {
        icon: 'control',
        name: 'Console',
        path: 'control',
        key: '0',
      },
      {
        icon: 'ProfileOutlined',
        name: 'Create',
        path: 'create',
        key: '1',
      },
      {
        icon: 'StarOutlined',
        name: 'Template',
        path: 'template',
        key: '2',
      },
      {
        icon: 'SkypeOutlined',
        name: 'Import',
        path: 'import',
        key: '3',
      },
      {
        icon: 'SketchOutlined',
        name: 'Communicate',
        path: 'communicate',
        key: '4',
      },
    ],
  }
} satisfies Meta<typeof Applist>;

export default meta;
type Story = StoryObj<typeof meta>;

export const APPDrawer: Story = {
  render: () =>({
    components: { 
      Applist,
      ProfileOutlined,
      ControlOutlined,
      SmileOutlined,
      SketchOutlined,
      StarOutlined,
      SkypeOutlined, 
    },
    template: `
    <Applist v-bind="args" >
      <template #appListDrawer_control>
        <ControlOutlined />
      </template>
      <template #appListDrawer_ProfileOutlined>
        <ProfileOutlined />
      </template>
      <template #appListDrawer_StarOutlined>
        <StarOutlined />
      </template>
      <template #appListDrawer_SkypeOutlined>
        <SkypeOutlined />
      </template>
      <template #appListDrawer_SketchOutlined>
        <SketchOutlined />
      </template>
    </Applist>
    `,
  }),
}
