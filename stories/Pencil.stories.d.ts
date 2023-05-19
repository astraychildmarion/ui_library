import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        text: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string | undefined>;
            required: false;
            default: string;
        };
        limitCount: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<number | undefined>;
            required: false;
            default: number;
        };
        invaildText: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string | undefined>;
            required: false;
            default: string;
        };
        apiErrorText: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string | undefined>;
            required: false;
            default: string;
        };
        apiError: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean | undefined>;
            required: false;
            default: boolean;
        };
        size: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string | undefined>;
            required: false;
            default: string;
        };
    }, {
        pressCancel: () => void;
    }, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("change" | "editModeEvent" | "pressEnter" | "triggerInvalid")[], "change" | "editModeEvent" | "pressEnter" | "triggerInvalid", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        text: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string | undefined>;
            required: false;
            default: string;
        };
        limitCount: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<number | undefined>;
            required: false;
            default: number;
        };
        invaildText: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string | undefined>;
            required: false;
            default: string;
        };
        apiErrorText: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string | undefined>;
            required: false;
            default: string;
        };
        apiError: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<boolean | undefined>;
            required: false;
            default: boolean;
        };
        size: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string | undefined>;
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
    tags: string[];
    argTypes: {
        text: {
            type: "string";
            description: string;
        };
        limitCount: {
            type: "string";
            description: string;
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
            description: string;
        };
        apiError: {
            description: string;
        };
        apiErrorText: {
            type: "string";
            description: string;
        };
        invaildText: {
            type: "string";
            description: string;
        };
        onPressEnter: {
            action: string;
            description: string;
        };
        onEditModeEvent: {
            action: string;
            description: string;
        };
        onChange: {
            action: string;
            description: string;
        };
        onTriggerInvalid: {
            action: string;
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const pencil: Story;
