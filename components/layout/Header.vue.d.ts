import { PropType } from './vue/dist/vue.esm-bundler.js';
import { HeaderUserMenu } from '../interface';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    logoUrl: {
        type: StringConstructor;
        default: string;
    };
    logoLink: {
        type: StringConstructor;
        default: string;
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
}>> & {
    onLogOut?: ((...args: any[]) => any) | undefined;
    onClickBell?: ((...args: any[]) => any) | undefined;
}, {
    logoUrl: string;
    logoLink: string;
    manageMenu: HeaderUserMenu[];
    userMenu: HeaderUserMenu[];
    userInfo: Record<string, any>;
    manageAuth: boolean;
    bellCount: number;
}>;
export default _sfc_main;
