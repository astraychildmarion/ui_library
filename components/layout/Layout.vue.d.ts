import { PropType } from './vue/dist/vue.esm-bundler.js';
import { SiderData, HeaderUserMenu, BellCardDataType } from '../interface';
import { Key } from 'ant-design-vue/lib/_util/type';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    hideUI: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideSider: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectedKeys: {
        type: PropType<Key[]>;
        default: () => string[];
    };
    siderData: {
        type: PropType<SiderData[]>;
        required: true;
    };
    isConsole: {
        type: BooleanConstructor;
        default: boolean;
    };
    appListDrawerData: {
        type: PropType<SiderData[]>;
        required: true;
    };
    selectAppListDrawerKey: {
        type: PropType<Key[]>;
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
        type: PropType<HeaderUserMenu[]>;
        default: () => never[];
    };
    userMenu: {
        type: PropType<HeaderUserMenu[]>;
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
        type: PropType<BellCardDataType[]>;
        default: () => never[];
    };
    bellDataStatus: {
        type: PropType<"loading" | "compete" | "ready">;
        default: string;
    };
}, {
    isSiderCollapse: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
    appListDrawerShow: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
    selectedInnerKeys: import('./vue/dist/vue.esm-bundler.js').Ref<Key[]>;
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
        type: PropType<Key[]>;
        default: () => string[];
    };
    siderData: {
        type: PropType<SiderData[]>;
        required: true;
    };
    isConsole: {
        type: BooleanConstructor;
        default: boolean;
    };
    appListDrawerData: {
        type: PropType<SiderData[]>;
        required: true;
    };
    selectAppListDrawerKey: {
        type: PropType<Key[]>;
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
        type: PropType<HeaderUserMenu[]>;
        default: () => never[];
    };
    userMenu: {
        type: PropType<HeaderUserMenu[]>;
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
        type: PropType<BellCardDataType[]>;
        default: () => never[];
    };
    bellDataStatus: {
        type: PropType<"loading" | "compete" | "ready">;
        default: string;
    };
}>> & {
    onClickAppListDrawerMenu?: ((...args: any[]) => any) | undefined;
    onLogOut?: ((...args: any[]) => any) | undefined;
    onClickBell?: ((...args: any[]) => any) | undefined;
    onClickMenu?: ((...args: any[]) => any) | undefined;
    onOnBreakpoint?: ((...args: any[]) => any) | undefined;
}, {
    selectedKeys: Key[];
    selectAppListDrawerKey: Key[];
    ver: string;
    logoLink: string;
    manageMenu: HeaderUserMenu[];
    userMenu: HeaderUserMenu[];
    userInfo: Record<string, any>;
    manageAuth: boolean;
    bellCount: number;
    bellDataSource: BellCardDataType[];
    bellDataStatus: "loading" | "compete" | "ready";
    hideUI: boolean;
    hideSider: boolean;
    isConsole: boolean;
}>;
export default _sfc_main;
