<template>
  <div
    id="search-bar__wrapper"
    class="search-bar__wrapper"
    data-e2e="global-search-input-wrapper"
  >
    <div class="search-bar__width">{{ displayContent }}</div>
    <Dropdown :trigger="['click']">
      <Input
        id="search-bar"
        v-model:value="searchContent"
        :placeholder="placeholder"
        allow-clear
        autocomplete="off"
        data-e2e="global-search-input"
        @pressEnter="searchBarEnter"
        @change="searchBarChange"
      >
        <template #suffix>
          <SearchOutlined v-if="searchContent.length < 1" :style="{ color: '#9c9c9c' }" />
        </template>
      </Input>
      <template #overlay>
        <Menu
          v-if="searchHistoryInner?.length !== 0"
          data-e2e="global-search-list"
          @click="clickMenu"
        >
          <MenuItem
            v-for="(item, index) in searchHistoryInner"
            :key="index"
            :value="item"
            data-e2e="global-search-list-item"
          >
            {{ item }}
          </MenuItem>
        </Menu>
      </template>
    </Dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, watch, computed, onMounted, onUpdated } from 'vue';
import { Input, Dropdown, Menu, MenuProps } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import { SearchBarTargetType, SearchBarDropdownType } from './interface';

export default defineComponent({
  components: { Input, SearchOutlined, Dropdown, Menu, MenuItem: Menu.Item },
  props: {
    placeholder: {
      default: 'Search on server list',
      type: String,
    },
    searchHistory: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    defaultValue: {
      type: String,
      default: '',
    },
    maxWidth: {
      type: Number,
      default: 362,
    },
    minWidth: {
      type: Number,
      default: 192,
    },
  },
  emits: ['searchBarEnter', 'searchBarChange', 'clickSearchbarMenu'],
  setup(props, { emit }) {
    const searchContent = ref<string>(props.defaultValue || '');
    const searchHistoryInner = ref(props.searchHistory);
    function searchBarEnter(e: Event) {
      emit('searchBarEnter', (e.target as HTMLInputElement).value);
    }
    function setInputWidth() {
      const inputDisplay = document.getElementById('search-bar');
      const spanDisplay = document.querySelector('.search-bar__width');
      const maxWidthNoPadding = props.maxWidth - 48;
      const minWidthNoPadding = props.minWidth - 48;
      if (inputDisplay && spanDisplay) {
        const spanDisplayWidth = spanDisplay.clientWidth;
        if (searchContent.value.length === 0) {
          inputDisplay.style.width = `${minWidthNoPadding - 14}px`;
        } else if (spanDisplayWidth > minWidthNoPadding && spanDisplayWidth < maxWidthNoPadding) {
          inputDisplay.style.width = `${spanDisplay.clientWidth}px`;
        } else if (spanDisplayWidth > maxWidthNoPadding) inputDisplay.style.width = `${maxWidthNoPadding}px`;
        else if (spanDisplayWidth < minWidthNoPadding) inputDisplay.style.width = `${minWidthNoPadding}px`;
      }
    }
    function searchBarChange(e: Event) {
      emit('searchBarChange', (e.target as HTMLInputElement).value);
    }
    const clickMenu: MenuProps['onClick'] = ({ item }) => {
      emit('clickSearchbarMenu', item.value);
      searchContent.value = item.value;
    }
    const displayContent = computed(() => {
      if (searchContent.value.length === 0) return props.placeholder;
      return searchContent.value;
    });
    watch(
      () => props.searchHistory,
      (n) => {
        searchHistoryInner.value = n;
      },
    );
    watch(
      () => props.defaultValue,
      (n) => {
        if (n && n.length > 0) searchContent.value = n;
      },
    );
    onMounted(() => {
      setInputWidth();
    });
    onUpdated(() => {
      setInputWidth();
    });

    return {
      searchContent,
      searchHistoryInner,
      setInputWidth,
      displayContent,
      clickMenu,
      searchBarEnter,
      searchBarChange,
    };
  },
});
</script>
<style lang="scss" scoped>
:deep(.ant-dropdown-menu-item) {
  &:hover {
    background-color: $dropdown-hover-bg;
  }
}
.search-bar {
  &__wrapper {
    position: relative;
    width: fit-content;
  }
  &__width {
    background-color: blanchedalmond;
    width: fit-content;
    max-width: 370px;
    height: 32px;
    overflow: scroll;
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
