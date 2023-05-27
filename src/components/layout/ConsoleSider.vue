<template>
  <div class="sider__wrapper" data-e2e="sider">
    <div className="sider__menu-wrapper__first">
      <Menu mode="inline" @click="$emit('clickMenu', $event)">
        <MenuItem v-if="firstData.path" :key="firstData.key" data-e2e="sider-item">
          <template #icon>
            <slot v-if="firstData.icon" :name="`sider_${firstData.icon}`"></slot>
            <img v-if="firstData.iconPath" :src="firstData.iconPath" className="anticon" />
          </template>
          <span>{{ firstData.name }}</span>
        </MenuItem>
        <Divider />
      </Menu>
    </div>
    <div class="sider__menu-wrapper__second">
      <Menu mode="inline" :selected-keys="selectedKeys" @click="$emit('clickMenu', $event)">
        <template v-for="item in restData">
          <MenuItem v-if="item.path" :key="item.key" data-e2e="sider-item">
            <template #icon>
              <slot v-if="item.icon" :name="`sider_${item.icon}`" />
              <img v-if="item.iconPath" :src="item.iconPath" class="anticon" />
            </template>
            <span>{{ item.name }}</span>
          </MenuItem>
        </template>
      </Menu>
    </div>
  </div>
</template>
<script lang="ts">
import { Menu } from 'ant-design-vue';
import { PropType, defineComponent, reactive, ref } from 'vue';
import { SiderData } from '../interface';
import { Key } from 'ant-design-vue/lib/_util/type';

export default defineComponent({
  name: 'Sider',
  components: {
    Menu,
    MenuItem: Menu.Item,
    Divider: Menu.Divider,
  },
  props: {
    selectedKeys: {
      type: Array as PropType<Key[]>,
      default: () => ['1'],
    },
    siderData: {
      type: Array as PropType<SiderData[]>,
      required: true,
    },
  },
  emits: ['clickMenu'],
  setup(props) {
    const firstData = ref(props.siderData[0]);
    const selectedKeysInnerData = reactive(props.selectedKeys);
    function getRestData() {
      const copy = [...props.siderData];
      copy.shift();
      return copy;
    }
    const restData = getRestData();
    return {
      firstData,
      restData,
      selectedKeysInnerData,
    };
  },
});
</script>
<style lang="scss" scoped>
.sider {
  &__wrapper {
    max-width: 256px;
    transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    box-shadow: 2px 0 8px rgb(0 0 0 / 15%);
    :deep(.ant-menu) {
      &.ant-menu-inline-collapsed {
        width: 72px;
        > .ant-menu-item {
          padding: 0 24px !important;
        }
      }
      .sider__item {
        display: flex;
        align-items: center;
      }
      .ant-menu-item {
        min-height: 56px;
        line-height: 56px;
        margin-top: 0px;
        margin-bottom: 0px;
        &-divider {
          background-color: $divider-bg-color;
          margin: 1px 16px;
        }
      }

      // light theme
      &.ant-menu-light {
        background: $sider-bg-light;
        color: $sider-item-text-light;

        .ant-menu-item {
          a {
            color: $sider-item-text-light;
          }
          &-selected {
            background: $sider-item-selected-light;
            color: $sider-item-text-light;
          }
          &-active {
            background: $sider-item-active-light;
            color: $sider-item-text-light;
          }
          svg {
            color: #3c3c3c;
          }
        }
        .ant-menu-submenu {
          > .ant-menu {
            background-color: $sider-bg-light;
          }
        }
      }
    }
    ::-webkit-scrollbar {
      width: 5px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: $scroll-track-color-hover;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: $scroll-thumb-color;
      border-radius: 8px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: $scroll-thumb-color-hover;
    }
  }
  &__menu-wrapper {
    &__first {
      padding-top: 16px;
      :deep(.ant-menu.ant-menu-dark) .ant-menu-item-selected {
        background-color: $sider-bg-dark;
      }
    }
    &__second {
      overflow: hidden overlay;
      height: 100vh;
    }
  }
  .goTo--style {
    color: #ffffff;
  }
}
</style>
<style lang="scss">
.ant-tooltip-inner {
  background-color: $tooltip-bg !important;
  border-radius: 4px;
}
.ant-tooltip-arrow-content {
  background-color: $tooltip-bg !important;
}
</style>
