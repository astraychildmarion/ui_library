<template>
  <div class="-layout" data-e2e="layout">
    <Layout :style="fixLayoutStyle">
      <LayoutHeader
        v-show="!hideUI"
        :style="{
          width: '100%',
          padding: '0',
          height: '72px',
          lineHeight: '72px',
          position: 'fixed',
          top: 0,
          zIndex: 999,
        }"
      >
        <Header
          :bell-count="bellCount"
          :manage-auth="manageAuth"
          height="72"
          :manage-menu="manageMenu"
          :logo-link="logoLink"
          :user-menu="userMenu"
          :user-info="userInfo"
          @logOut="$emit('logOut')"
          @clickBell="clickBell"
        >
          <template v-for="item in manageMenu" #[`manageMenu_`+item.icon]>
            <slot :name="`manageMenu_` + item.icon" />
          </template>
          <template v-for="item in userMenu" #[`userMenu_`+item.icon]>
            <slot :name="`userMenu_` + item.icon" />
          </template>
        </Header>
      </LayoutHeader>
      <Layout :style="fixLayoutStyle">
        <LayoutSider
          v-if="!isConsole"
          v-show="!hideUI && !hideSider"
          v-model:collapsed="isSiderCollapse"
          breakpoint="xxl"
          collapsible
          collapsed-width="72"
          width="256"
          :style="{
            height: '100%',
            top: '72px',
            visibility: 'hidden',
          }"
        />
        <LayoutSider
          v-show="!hideUI && !hideSider"
          v-model:collapsed="isSiderCollapse"
          :breakpoint="isConsole? undefined : 'xxl'"
          collapsible
          collapsed-width="72"
          width="256"
          :trigger="null"
          :style="{
            backgroundColor: layoutSiderBg,
            position: 'fixed',
            top: '72px',
            zIndex: 2,
          }"
          @breakpoint="onBreakpoint"
        >
          <Sider
            v-if="!isConsole"
            v-model:selectedKeys="selectedInnerKeys"
            :sider-data="siderData"
            @clickMenu="clickMenu"
          >
            <template v-for="item in siderData" #[`sider_`+item.icon]>
              <slot :name="`sider_` + item.icon" />
            </template>
          </Sider>
          <ConsoleSider
            v-else
            v-model:selectedKeys="selectedInnerKeys"
            :sider-data="siderData"
            @mouseenter="isSiderCollapse = false"
            @mouseleave="isSiderCollapse = true"
            @clickMenu="clickMenu"
          >
            <template v-for="item in siderData" #[`sider_`+item.icon]>
              <slot :name="`sider_` + item.icon" />
            </template>
          </ConsoleSider>
          <div
            v-if="!isConsole"
            class="ant-layout-sider-trigger"
            :style="collapseStyle"
            @click="handlerSider"
          >
            <MenuUnfoldOutlined v-if="isSiderCollapse" />
            <MenuFoldOutlined v-else />
            <span v-show="!isSiderCollapse" :style="{ paddingLeft: '10px' }">Close</span>
          </div>
        </LayoutSider>
        <LayoutContent>
          <slot name="content" />
        </LayoutContent>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { Layout } from 'ant-design-vue';
import Header from './Header.vue';
import Sider from './Sider.vue';
import ConsoleSider from './ConsoleSider.vue';
import { SiderData, HeaderUserMenu, BellCardDataType } from '../interface';
import { Key } from 'ant-design-vue/lib/_util/type';

export default defineComponent({
  name: 'AppLayout',
  components: {
    Layout,
    LayoutHeader: Layout.Header,
    LayoutSider: Layout.Sider,
    LayoutContent: Layout.Content,
    Header,
    Sider,
    ConsoleSider,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  props: {
    hideUI: {
      type: Boolean,
      default: false,
    },
    hideSider: {
      type: Boolean,
      default: false,
    },
    // sider
    selectedKeys: {
      type: Array as PropType<Key[]>,
      default: () => ['1'],
    },
    siderData: {
      type: Array as PropType<SiderData[]>,
      required: true,
    },
    isConsole: {
      type: Boolean,
      default: false,
    },
    // header
    logoLink: {
      type: String,
      default: '',
      required: true,
    },
    manageMenu: {
      type: Array as PropType<HeaderUserMenu[]>,
      default: () => [],
    },
    userMenu: {
      type: Array as PropType<HeaderUserMenu[]>,
      default: () => [],
    },
    userInfo: {
      type: Object,
      default: () => ({}),
    },
    manageAuth: {
      type: Boolean,
      default: false,
    },
    bellCount: {
      type: Number,
      default: 0,
    },
    bellDataSource: {
      type: Array as PropType<BellCardDataType[]>,
      default: () => [],
    },
    bellDataStatus: {
      type: String as PropType<'loading' | 'compete' | 'ready'>,
      default: 'ready',
    },
  },
  emits: ['clickMenu', 'onBreakpoint', 'logOut', 'clickBell'],
  setup(props, { emit }) {
    const isSiderCollapse = ref<boolean>(props.isConsole === true);
    const selectedInnerKeys = ref(props.selectedKeys);

    function clickMenu({ key }: { key: string }) {
      emit('clickMenu', key);
    }
    function siderCollapse(boo: boolean) {
      isSiderCollapse.value = !boo;
    }
    function onBreakpoint(broken: boolean) {
      emit('onBreakpoint', broken);
    }
    function clickBell() {
      emit('clickBell');
    }
    function handlerSider() {
      isSiderCollapse.value = !isSiderCollapse.value;
    }
    const collapseStyle = computed(() => ({
      width: isSiderCollapse.value ? '72px' : '256px',
    }));

    const layoutSiderBg = computed(() => props.isConsole ? '#f0f0f0' : '#ffffff');

    watch(
      () => props.selectedKeys,
      (n) => {
        selectedInnerKeys.value = n;
      },
    );

    return {
      isSiderCollapse,
      selectedInnerKeys,
      collapseStyle,
      layoutSiderBg,
      handlerSider,
      clickMenu,
      siderCollapse,
      clickBell,
      onBreakpoint,
    };
  },
  data() {
    return {
      fixLayoutStyle: {
        padding: '0',
        margin: '0',
        maxWidth: 'inherit',
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.-layout {
  position: relative;
  :deep(.ant-layout-header) {
    padding: 0;
  }
  :deep(.ant-layout-sider) {
    background: $sider-bg-dark;
  }
}
.ant-layout-sider-trigger {
  background: $primary-color;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  padding-left: 31px;
  text-align: left;
}
</style>
<style lang="scss">

</style>
