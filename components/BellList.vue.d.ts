import { PropType } from './vue/dist/vue.esm-bundler.js';
import { BellCardDataType } from './interface';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    dataSource: {
        type: PropType<BellCardDataType[]>;
        default: () => never[];
    };
    isShowLoading: {
        type: PropType<boolean>;
        default: boolean;
    };
    isShow: {
        type: PropType<boolean>;
        default: boolean;
    };
    isNoData: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    convertToDate: (newDate: number) => string;
    emptyImage: any;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("infiniteScroll" | "clickOutside")[], "infiniteScroll" | "clickOutside", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    dataSource: {
        type: PropType<BellCardDataType[]>;
        default: () => never[];
    };
    isShowLoading: {
        type: PropType<boolean>;
        default: boolean;
    };
    isShow: {
        type: PropType<boolean>;
        default: boolean;
    };
    isNoData: {
        type: PropType<boolean>;
        default: boolean;
    };
}>> & {
    onInfiniteScroll?: ((...args: any[]) => any) | undefined;
    onClickOutside?: ((...args: any[]) => any) | undefined;
}, {
    dataSource: BellCardDataType[];
    isShowLoading: boolean;
    isShow: boolean;
    isNoData: boolean;
}>;
export default _sfc_main;
