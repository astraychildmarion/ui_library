import { PropType } from './vue/dist/vue.esm-bundler.js';
import { SiderData } from '../interface';
import { Key } from 'ant-design-vue/lib/_util/type';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    selectedKeys: {
        type: PropType<Key[]>;
        default: () => string[];
    };
    siderData: {
        type: PropType<SiderData[]>;
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
    restData: SiderData[];
    selectedKeysInnerData: Key[];
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "clickMenu"[], "clickMenu", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    selectedKeys: {
        type: PropType<Key[]>;
        default: () => string[];
    };
    siderData: {
        type: PropType<SiderData[]>;
        required: true;
    };
}>> & {
    onClickMenu?: ((...args: any[]) => any) | undefined;
}, {
    selectedKeys: Key[];
}>;
export default _sfc_main;
