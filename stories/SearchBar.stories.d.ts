import type { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
        placeholder: {
            default: string;
            type: StringConstructor;
        };
        searchHistory: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string[]>;
            default: () => never[];
        };
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        maxWidth: {
            type: NumberConstructor;
            default: number;
        };
        minWidth: {
            type: NumberConstructor;
            default: number;
        };
    }, {
        searchContent: import('./vue/dist/vue.esm-bundler.js').Ref<string>;
        searchHistoryInner: import('./vue/dist/vue.esm-bundler.js').Ref<string[]>;
        setInputWidth: () => void;
        displayContent: import('./vue/dist/vue.esm-bundler.js').ComputedRef<string>;
        clickMenu: import("ant-design-vue/lib/menu/src/interface").MenuClickEventHandler;
        searchBarEnter: (e: Event) => void;
        searchBarChange: (e: Event) => void;
    }, unknown, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, ("searchBarEnter" | "searchBarChange" | "clickSearchbarMenu")[], "searchBarEnter" | "searchBarChange" | "clickSearchbarMenu", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
        placeholder: {
            default: string;
            type: StringConstructor;
        };
        searchHistory: {
            type: import('./vue/dist/vue.esm-bundler.js').PropType<string[]>;
            default: () => never[];
        };
        defaultValue: {
            type: StringConstructor;
            default: string;
        };
        maxWidth: {
            type: NumberConstructor;
            default: number;
        };
        minWidth: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        onSearchBarEnter?: ((...args: any[]) => any) | undefined;
        onSearchBarChange?: ((...args: any[]) => any) | undefined;
        onClickSearchbarMenu?: ((...args: any[]) => any) | undefined;
    }, {
        defaultValue: string;
        placeholder: string;
        searchHistory: string[];
        maxWidth: number;
        minWidth: number;
    }>;
    tags: string[];
    argTypes: {
        onSearchBarEnter: {
            action: string;
            description: string;
        };
        onSearchBarChange: {
            action: string;
            description: string;
        };
        onClickSearchbarMenu: {
            action: string;
            description: string;
        };
        placeholder: {
            type: "string";
            description: string;
        };
        searchHistory: {
            control: string;
            description: string;
        };
        defaultValue: {
            type: "string";
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SearchBar: Story;
