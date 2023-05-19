<template>
  <Drawer
    v-model:visible="isDrawerShow"
    placement="left"
    :mask="true"
    :mask-style="{ opacity: '0.8' }"
    :closable="false"
    :width="256"
    :style="{ marginTop: '72px' }"
    :body-style="{ padding: '0px' }"
    @close="closeDrawer"
  >
    <div class="applist-drawer__wrapper" data-e2e="applist-drawer">
      <Menu
        mode="inline"
        :inline-collapsed="false"
        theme="light"
        class="applist-drawer__first-item"
        @click="$emit('clickAppListDrawerMenu', $event)"
      >
        <MenuItem v-if="firstData.path" :key="firstData.key" data-e2e="applist-drawer-item">
          <template #icon>
            <span class="fix-icon-position">
              <slot v-if="firstData.icon" :name="`appListDrawer_${firstData.icon}`" />
              <img v-if="firstData.iconPath" :src="firstData.iconPath" class="anticon" />
            </span>
          </template>
          <span>{{ firstData.name }}</span>
        </MenuItem>
        <Divider />
      </Menu>
      <Menu
        v-model:selectedKeys="selectedKeysInnerData"
        mode="inline"
        :inline-collapsed="false"
        theme="light"
        @click="$emit('clickAppListDrawerMenu', $event)"
      >
        <template v-for="item in restData">
          <MenuItem v-if="item.path" :key="item.key" data-e2e="applist-drawer-item">
            <template #icon>
              <span class="fix-icon-position">
                <slot v-if="item.icon" :name="`appListDrawer_${item.icon}`" />
                <img v-if="item.iconPath" :src="item.iconPath" class="anticon" />
              </span>
            </template>
            <span>{{ item.name }}</span>
          </MenuItem>
        </template>
      </Menu>
      <div id="appVersion" data-e2e="app-version">
        <div>
          <div>{{ ver }}</div>
          <div>{{ uiKit.name }}: {{ uiKit.version }}</div>
        </div>
      </div>
    </div>
  </Drawer>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, watch, PropType } from 'vue';
import { Drawer, Menu } from 'ant-design-vue';
import { SiderData } from '../interface';
import packageJson from '../../../package.json';
import { Key } from 'ant-design-vue/lib/_util/type';

export default defineComponent({
  name: 'AppListDrawer',
  components: {
    Drawer,
    Menu,
    MenuItem: Menu.Item,
    Divider: Menu.Divider,
  },
  props: {
    selectedKeys: {
      type: Array,
      default: () => ['1'],
    },
    appListDrawerShow: {
      type: Boolean,
      default: false,
      required: true,
    },
    appListDrawerData: {
      type: Array as PropType<SiderData[]>,
      required: true,
    },
    selectAppListDrawerKey: {
      type: Array as PropType<Key[]>,
      default: () => ['1'],
    },
    ver: {
      type: String,
      default: 'default',
    },
  },
  emits: ['clickAppListDrawerMenu'],
  setup(props) {
    const { version } = packageJson;
    const uiKit = {
      name: 'cloud-kit-2',
      version,
    };
    const isDrawerShow = ref(props.appListDrawerShow);
    // get applist item
    const firstData = ref(props.appListDrawerData[0]);
    const selectedKeysInnerData = reactive(props.selectAppListDrawerKey);
    function appListDrawerData() {
      const copy = [...props.appListDrawerData];
      copy.shift();
      return copy;
    }
    const restData = appListDrawerData();

    function closeDrawer() {
      isDrawerShow.value = false;
    }

    watch(
      () => props.appListDrawerShow,
      (n) => {
        isDrawerShow.value = n;
      },
    );

    return {
      firstData,
      restData,
      isDrawerShow,
      closeDrawer,
      selectedKeysInnerData,
      uiKit,
    };
  },
});
</script>
<style lang="scss" scoped>
.applist-drawer {
  &__wrapper {
    background-color: #f0f0f0;
    height: 100vh;
    :deep(.ant-menu) {
      &.ant-menu-inline-collapsed > .ant-menu-item .anticon,
      &.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
        line-height: 0;
      }
      &.ant-menu-inline-collapsed {
        > .ant-menu-item {
          text-align: center;
          padding: 0 24px !important;
        }
        > .ant-menu-submenu > .ant-menu-submenu-title {
          padding: 0 24px !important;
          text-align: center;
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
        &.applist-drawer__first-item {
          padding-top: 16px;
          .ant-menu-item-selected {
            background: transparent;
            color: $sider-item-text-light;
            &::after {
              border-right: none;
              transform: scaleY(0);
              opacity: 0;
            }
          }
          .ant-menu-item {
            &:hover {
              background: $sider-item-active-light;
              color: $sider-item-text-light;
            }
            &-active {
              background: $sider-item-active-light;
              color: $sider-item-text-light;
            }
            &:active {
              background: $sider-item-active-light;
              color: $sider-item-text-light;
            }
          }
        }
        .ant-menu-item {
          a {
            color: $sider-item-text-light;
          }
          &-selected {
            background: $sider-item-selected-light;
            color: $sider-item-text-light;
            &::after {
              border-right: 4px solid $sider-item-selected-border-light;
              transform: scaleY(1);
              opacity: 1;
            }
          }
          &:hover {
            background: $sider-item-active-light;
            color: $sider-item-text-light;
          }
          &-active {
            background: $sider-item-active-light;
            color: $sider-item-text-light;
          }
          &:active {
            background: $sider-item-active-light;
            color: $sider-item-text-light;
          }
          .anticon {
            margin-right: 9px;
            padding-left: 6px;
          }
        }
        .ant-menu-submenu {
          > .ant-menu {
            background-color: $sider-bg-light;
          }
        }
      }
    }
  }
}

#appVersion {
  display: flex;
  flex-direction: row;
  cursor: default;
  transition: 0.3s;
  position: fixed;
  bottom: 15px;
  color: transparent;
  padding: 0 32px !important;
  &:hover {
    color: #696969;
  }
}
</style>
