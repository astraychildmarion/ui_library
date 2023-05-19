import { PropType } from './vue/dist/vue.esm-bundler.js';
import { Dayjs } from 'dayjs';
import { FilterDefaultValue, FilterOption, DropdownOption } from './interface';
declare const _sfc_main: import('./vue/dist/vue.esm-bundler.js').DefineComponent<{
    filterSelectorFormat: {
        type: ObjectConstructor;
        required: true;
    };
    filterSelector: {
        type: PropType<FilterOption[]>;
        required: true;
    };
    dropdownOption: {
        type: PropType<DropdownOption[]>;
        required: true;
    };
    filterDefaultValue: {
        type: PropType<FilterDefaultValue[]>;
        default: () => never[];
    };
    filterRangePickerFormat: {
        type: StringConstructor;
        default: string;
    };
}, {
    visible: import('./vue/dist/vue.esm-bundler.js').Ref<boolean>;
    filterItems: import('./vue/dist/vue.esm-bundler.js').Ref<{
        field: string;
        mode: string;
        value: any;
    }[]>;
    debounceFilterEmit: () => void;
    rangeValue: import('./vue/dist/vue.esm-bundler.js').Ref<any>;
    addFilterBtnDisabled: import('./vue/dist/vue.esm-bundler.js').ComputedRef<boolean>;
    active: import('./vue/dist/vue.esm-bundler.js').ComputedRef<boolean>;
    titleText: import('./vue/dist/vue.esm-bundler.js').ComputedRef<"Filter Value" | "Introduction">;
    filterOption: import('./vue/dist/vue.esm-bundler.js').ComputedRef<FilterOption[]>;
    formatMap: import('./vue/dist/vue.esm-bundler.js').Ref<Map<string, string>>;
    inputBlur: (event: any) => void;
    handleMenuClick: () => void;
    handlerClean: () => void;
    handlerGetRange: () => void;
    hideFilterPopup: () => void;
    handlerOverlayStyle: (text: string) => {};
    addFilter: () => void;
    deleteFilter: (index: number) => void;
    disabledDate: (current: Dayjs) => boolean;
    changeFilterSelector: (field: string) => void;
    checkSortDisable: (field: string) => boolean;
    getSuboption: (filterItem: {
        field: string;
        value: string[];
    }) => string[];
}, {
    filterSort: {
        title: string;
        value: string;
    }[];
}, {}, {}, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('./vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, "filterChange"[], "filterChange", import('./vue/dist/vue.esm-bundler.js').VNodeProps & import('./vue/dist/vue.esm-bundler.js').AllowedComponentProps & import('./vue/dist/vue.esm-bundler.js').ComponentCustomProps, Readonly<import('./vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    filterSelectorFormat: {
        type: ObjectConstructor;
        required: true;
    };
    filterSelector: {
        type: PropType<FilterOption[]>;
        required: true;
    };
    dropdownOption: {
        type: PropType<DropdownOption[]>;
        required: true;
    };
    filterDefaultValue: {
        type: PropType<FilterDefaultValue[]>;
        default: () => never[];
    };
    filterRangePickerFormat: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onFilterChange?: ((...args: any[]) => any) | undefined;
}, {
    filterDefaultValue: FilterDefaultValue[];
    filterRangePickerFormat: string;
}>;
export default _sfc_main;
