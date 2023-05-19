import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        selectedKeys: {
            type: ArrayConstructor;
            default: () => string[];
        };
        appListDrawerShow: {
            type: BooleanConstructor;
            default: boolean;
            required: true;
        };
        appListDrawerData: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").SiderData[]>;
            required: true;
        };
        selectAppListDrawerKey: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("ant-design-vue/lib/_util/type").Key[]>;
            default: () => string[];
        };
        ver: {
            type: StringConstructor;
            default: string;
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
        isDrawerShow: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
        closeDrawer: () => void;
        selectedKeysInnerData: import("ant-design-vue/lib/_util/type").Key[];
        uiKit: {
            name: string;
            version: string;
        };
    }, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "clickAppListDrawerMenu"[], "clickAppListDrawerMenu", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        selectedKeys: {
            type: ArrayConstructor;
            default: () => string[];
        };
        appListDrawerShow: {
            type: BooleanConstructor;
            default: boolean;
            required: true;
        };
        appListDrawerData: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").SiderData[]>;
            required: true;
        };
        selectAppListDrawerKey: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("ant-design-vue/lib/_util/type").Key[]>;
            default: () => string[];
        };
        ver: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onClickAppListDrawerMenu?: ((...args: any[]) => any) | undefined;
    }, {
        selectedKeys: unknown[];
        selectAppListDrawerKey: import("ant-design-vue/lib/_util/type").Key[];
        ver: string;
    }>;
    argTypes: {
        appListDrawerShow: {
            control: string;
            description: string;
        };
        appListDrawerData: {
            control: string;
            description: string;
        };
        selectAppListDrawerKey: {
            control: string;
            description: string;
        };
        ver: {
            control: string;
            description: string;
        };
        onClickAppListDrawerMenu: {
            action: string;
            description: string;
        };
    };
    args: {
        ver: string;
        appListDrawerShow: boolean;
        appListDrawerData: {
            icon: string;
            name: string;
            path: string;
            key: string;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const APPDrawer: Story;
