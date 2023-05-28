import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        logoUrl: {
            type: StringConstructor;
            default: string;
        };
        logoLink: {
            type: StringConstructor;
            default: string;
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
    }, {
        manageMenuVisible: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
        isDrawerClose: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
        clickBellHandler: () => void;
    }, {
        menuArrowStyle: {
            marginLeft: string;
            fontSize: string;
            width: string;
        };
        bellStyle: {
            color: string;
            fontSize: string;
        };
    }, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("logOut" | "clickBell")[], "logOut" | "clickBell", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        logoUrl: {
            type: StringConstructor;
            default: string;
        };
        logoLink: {
            type: StringConstructor;
            default: string;
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
    }>> & {
        onLogOut?: ((...args: any[]) => any) | undefined;
        onClickBell?: ((...args: any[]) => any) | undefined;
    }, {
        logoUrl: string;
        logoLink: string;
        manageMenu: import("../components/interface").HeaderUserMenu[];
        userMenu: import("../components/interface").HeaderUserMenu[];
        userInfo: Record<string, any>;
        manageAuth: boolean;
        bellCount: number;
    }>;
    tags: string[];
    argTypes: {
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
        bellCount: {
            control: string;
            description: string;
        };
        bellDataSource: {
            control: string;
            description: string;
        };
        bellDataStatus: {
            options: string[];
            control: {
                type: string;
            };
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
    };
    args: {
        manageAuth: boolean;
        manageMenu: {
            name: string;
            url: string;
            icon: string;
        }[];
        userMenu: {
            name: string;
            url: string;
        }[];
        userInfo: {
            name: string;
            avatar: string;
        };
        bellCount: number;
        bellDataStatus: string;
        bellDataSource: {
            title: string;
            content: string;
            date: string;
            id: string;
            read: boolean;
        }[];
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Header: Story;
