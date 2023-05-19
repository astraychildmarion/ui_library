import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        selectedKeys: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("ant-design-vue/lib/_util/type").Key[]>;
            default: () => string[];
        };
        siderData: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").SiderData[]>;
            required: true;
        };
    }, {
        firstData: import('./vue/dist/vue.esm-bundler.js').Ref<{
            name: string;
            path: string;
            key: string;
            icon?: string | undefined;
            iconPath?: string | undefined;
        }>;
        restData: import("../components/interface").SiderData[];
        selectedKeysInnerData: import("ant-design-vue/lib/_util/type").Key[];
    }, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "clickMenu"[], "clickMenu", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        selectedKeys: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("ant-design-vue/lib/_util/type").Key[]>;
            default: () => string[];
        };
        siderData: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").SiderData[]>;
            required: true;
        };
    }>> & {
        onClickMenu?: ((...args: any[]) => any) | undefined;
    }, {
        selectedKeys: import("ant-design-vue/lib/_util/type").Key[];
    }>;
    tags: string[];
    argTypes: {
        siderData: {
            control: string;
            description: string;
        };
        selectedKeys: {
            control: string;
            description: string;
        };
        onClickMenu: {
            action: string;
            description: string;
        };
    };
    args: {
        selectedKeys: string[];
        siderData: {
            icon: string;
            name: string;
            path: string;
            key: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const AppSider: Story;
