import { PropType } from './vue/dist/vue.esm-bundler.js';
import { SiderData } from '../interface';
import { Key } from 'ant-design-vue/lib/_util/type';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
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
        type: PropType<SiderData[]>;
        required: true;
    };
    selectAppListDrawerKey: {
        type: PropType<Key[]>;
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
    restData: SiderData[];
    isDrawerShow: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
    closeDrawer: () => void;
    selectedKeysInnerData: Key[];
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
        type: PropType<SiderData[]>;
        required: true;
    };
    selectAppListDrawerKey: {
        type: PropType<Key[]>;
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
    selectAppListDrawerKey: Key[];
    ver: string;
}>;
export default _sfc_main;
