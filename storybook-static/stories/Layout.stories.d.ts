import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        hideUI: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideSider: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectedKeys: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("ant-design-vue/lib/_util/type").Key[]>;
            default: () => string[];
        };
        siderData: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").SiderData[]>;
            required: true;
        };
        isConsole: {
            type: BooleanConstructor;
            default: boolean;
        };
        appListDrawerData: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").SiderData[]>;
            required: true;
        };
        selectAppListDrawerKey: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("ant-design-vue/lib/_util/type").Key[]>;
            default: () => never[];
        };
        ver: {
            type: StringConstructor;
            default: string;
        };
        logoLink: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        manageMenu: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").HeaderUserMenu[]>;
            default: () => never[];
        };
        userMenu: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").HeaderUserMenu[]>;
            default: () => never[];
        };
        userInfo: {
            type: ObjectConstructor;
            default: () => {};
        };
        manageAuth: {
            type: BooleanConstructor;
            default: boolean;
        };
        bellCount: {
            type: NumberConstructor;
            default: number;
        };
        bellDataSource: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").BellCardDataType[]>;
            default: () => never[];
        };
        bellDataStatus: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<"loading" | "compete" | "ready">;
            default: string;
        };
    }, {
        isSiderCollapse: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
        appListDrawerShow: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
        selectedInnerKeys: import('./vue/dist/vue.esm-bundler.js').Ref<import("ant-design-vue/lib/_util/type").Key[]>;
        collapseStyle: import('./vue/dist/vue.esm-bundler.js').ComputedRef<{
            width: string;
        }>;
        layoutSiderBg: import('./vue/dist/vue.esm-bundler.js').ComputedRef<"#ffffff" | "#f0f0f0">;
        handlerSider: () => void;
        clickAppListDrawerMenu: ($event: Event) => void;
        clickTopLeftCorner: (boo: boolean) => void;
        clickMenu: ({ key }: {
            key: string;
        }) => void;
        siderCollapse: (boo: boolean) => void;
        clickBell: () => void;
        onBreakpoint: (broken: boolean) => void;
    }, {
        fixLayoutStyle: {
            padding: string;
            margin: string;
            maxWidth: string;
        };
    }, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("clickMenu" | "clickAppListDrawerMenu" | "logOut" | "clickBell" | "onBreakpoint")[], "clickMenu" | "clickAppListDrawerMenu" | "logOut" | "clickBell" | "onBreakpoint", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        hideUI: {
            type: BooleanConstructor;
            default: boolean;
        };
        hideSider: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectedKeys: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("ant-design-vue/lib/_util/type").Key[]>;
            default: () => string[];
        };
        siderData: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").SiderData[]>;
            required: true;
        };
        isConsole: {
            type: BooleanConstructor;
            default: boolean;
        };
        appListDrawerData: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").SiderData[]>;
            required: true;
        };
        selectAppListDrawerKey: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("ant-design-vue/lib/_util/type").Key[]>;
            default: () => never[];
        };
        ver: {
            type: StringConstructor;
            default: string;
        };
        logoLink: {
            type: StringConstructor;
            default: string;
            required: true;
        };
        manageMenu: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").HeaderUserMenu[]>;
            default: () => never[];
        };
        userMenu: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").HeaderUserMenu[]>;
            default: () => never[];
        };
        userInfo: {
            type: ObjectConstructor;
            default: () => {};
        };
        manageAuth: {
            type: BooleanConstructor;
            default: boolean;
        };
        bellCount: {
            type: NumberConstructor;
            default: number;
        };
        bellDataSource: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<import("../components/interface").BellCardDataType[]>;
            default: () => never[];
        };
        bellDataStatus: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<"loading" | "compete" | "ready">;
            default: string;
        };
    }>> & {
        onClickAppListDrawerMenu?: ((...args: any[]) => any) | undefined;
        onLogOut?: ((...args: any[]) => any) | undefined;
        onClickBell?: ((...args: any[]) => any) | undefined;
        onClickMenu?: ((...args: any[]) => any) | undefined;
        onOnBreakpoint?: ((...args: any[]) => any) | undefined;
    }, {
        selectedKeys: import("ant-design-vue/lib/_util/type").Key[];
        selectAppListDrawerKey: import("ant-design-vue/lib/_util/type").Key[];
        ver: string;
        logoLink: string;
        manageMenu: import("../components/interface").HeaderUserMenu[];
        userMenu: import("../components/interface").HeaderUserMenu[];
        userInfo: Record<string, any>;
        manageAuth: boolean;
        bellCount: number;
        bellDataSource: import("../components/interface").BellCardDataType[];
        bellDataStatus: "loading" | "compete" | "ready";
        hideUI: boolean;
        hideSider: boolean;
        isConsole: boolean;
    }>;
    argTypes: {
        siderData: {
            control: string;
            description: string;
        };
        selectedKeys: {
            control: string;
            description: string;
        };
        isConsole: {
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
        manageAuth: {
            control: string;
            description: string;
        };
        logoLink: {
            control: string;
            description: string;
        };
        manageMenu: {
            control: string;
            description: string;
        };
        userMenu: {
            control: string;
            description: string;
        };
        userInfo: {
            control: string;
            description: string;
        };
        hideUI: {
            control: string;
            description: string;
        };
        hideSider: {
            control: string;
            description: string;
        };
        bellCount: {
            control: string;
            description: string;
        };
        onClickAppListDrawerMenu: {
            action: string;
            description: string;
        };
        onClickMenu: {
            action: string;
            description: string;
        };
        onLogOut: {
            action: string;
            description: string;
        };
        onClickBell: {
            action: string;
            description: string;
        };
        content: {
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Layout: Story;
