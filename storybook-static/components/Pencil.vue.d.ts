import type { PropType as __PropType } from './vue/dist/vue.esm-bundler.js';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    text: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    limitCount: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    invaildText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    apiErrorText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    apiError: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    size: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {
    pressCancel: () => void;
}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("change" | "editModeEvent" | "pressEnter" | "triggerInvalid")[], "change" | "editModeEvent" | "pressEnter" | "triggerInvalid", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    text: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    limitCount: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    invaildText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    apiErrorText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    apiError: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    size: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    onEditModeEvent?: ((...args: any[]) => any) | undefined;
    onPressEnter?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onTriggerInvalid?: ((...args: any[]) => any) | undefined;
}, {
    text: string | undefined;
    limitCount: number | undefined;
    size: string | undefined;
    invaildText: string | undefined;
    apiErrorText: string | undefined;
    apiError: boolean | undefined;
}>;
export default _sfc_main;
