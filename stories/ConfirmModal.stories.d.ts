import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        isShow: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmType: {
            type: StringConstructor;
            default: string;
        };
        cancelButtonText: {
            type: StringConstructor;
            default: string;
        };
        confirmButtonText: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }, {
        getContainer: () => any;
        handleCancel: () => void;
        handleOk: () => void;
        setConfirmStyle: import('./vue/dist/vue.esm-bundler.js').ComputedRef<any>;
        divref: import('./vue/dist/vue.esm-bundler.js').Ref<any>;
        propsIsShow: any;
    }, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("clickConfirm" | "clickCancel")[], "clickConfirm" | "clickCancel", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        isShow: {
            type: BooleanConstructor;
            default: boolean;
        };
        confirmType: {
            type: StringConstructor;
            default: string;
        };
        cancelButtonText: {
            type: StringConstructor;
            default: string;
        };
        confirmButtonText: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        onClickConfirm?: ((...args: any[]) => any) | undefined;
        onClickCancel?: ((...args: any[]) => any) | undefined;
    }, {
        isShow: boolean;
        title: string;
        confirmType: string;
        cancelButtonText: string;
        confirmButtonText: string;
        content: string;
    }>;
    tags: string[];
    decorators: (() => {
        template: string;
    })[];
    argTypes: {
        confirmType: {
            options: string[];
            control: {
                type: string;
            };
        };
        onClickConfirm: {
            action: string;
            description: string;
        };
        onClickCancel: {
            action: string;
            description: string;
        };
        cancelButtonText: {
            type: "string";
            description: string;
        };
        confirmButtonText: {
            type: "string";
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ConfirmModalArgs: Story;
