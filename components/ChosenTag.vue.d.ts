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
    readonly: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}, {}, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("renameTag" | "deleteTag" | "chooseTag" | "cancelTag" | "editModeEvent")[], "renameTag" | "deleteTag" | "chooseTag" | "cancelTag" | "editModeEvent", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
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
    readonly: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
}>> & {
    onRenameTag?: ((...args: any[]) => any) | undefined;
    onDeleteTag?: ((...args: any[]) => any) | undefined;
    onChooseTag?: ((...args: any[]) => any) | undefined;
    onCancelTag?: ((...args: any[]) => any) | undefined;
    onEditModeEvent?: ((...args: any[]) => any) | undefined;
}, {
    text: string | undefined;
    limitCount: number | undefined;
    readonly: boolean | undefined;
}>;
export default _sfc_main;
