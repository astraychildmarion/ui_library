<template>
  <div class="header">
    <div class="header__container">
      <div class="header__logo">
        <a :href="logoLink"> UI Library </a>
      </div>
      <div class="header__user">
        <Dropdown v-if="manageAuth" @visibleChange="(visible) => (manageMenuVisible = visible)">
          <a class="header__user-manage ant-dropdown-link" data-e2e="manage-menu-button">
            Manage
            <UpOutlined v-if="manageMenuVisible" :style="menuArrowStyle" />
            <DownOutlined v-else :style="menuArrowStyle" />
          </a>
          <template #overlay>
            <div class="header__user-manage__menu">
              <div
                v-for="(item, index) in manageMenu"
                :key="index"
                class="header__user-manage__menu-item"
              >
                <a :href="item.url">
                  <span class="header__user-manage__menu-item__span">{{ item.name }}</span>
                  <slot v-if="item.icon" :name="`manageMenu_${item.icon}`" />
                  <img v-if="item.iconPath" :src="item.iconPath" class="anticon" />
                </a>
              </div>
            </div>
          </template>
        </Dropdown>
        <div
          class="header__user-notification"
          data-e2e="notification-bell"
          @click="clickBellHandler"
        >
          <Badge :count="bellCount" :number-style="{ fontSize: '10px' }" :offset="[10, -6]">
            <BellOutlined :style="bellStyle" />
          </Badge>
        </div>
        <Dropdown>
          <a class="header__user-info ant-dropdown-link" data-e2e="account-menu-button">
            <div class="header__user-info__avatar">
              <Avatar data-e2e="avatar-icon">{{ userInfo.avatar }}</Avatar>
            </div>
            <div class="header__user-info__name" data-e2e="avatar-username">
              {{ userInfo.name }}
            </div>
          </a>
          <template #overlay>
            <div class="header__user-manage__menu">
              <div
                v-for="(item, index) in userMenu"
                :key="index"
                class="header__user-manage__menu-item"
              >
                <a :href="item.url">
                  <span class="header__user-manage__menu-item__span">{{ item.name }}</span>
                  <slot v-if="item.icon" :name="`userMenu_${item.icon}`" />
                  <img v-if="item.iconPath" :src="item.iconPath" class="anticon" />
                </a>
              </div>
              <div class="header__user-manage__menu-item" @click="$emit('logOut')">
                <div>
                  <span class="header__user-manage__menu-item__span">Log Out</span>
                  <LogoutOutlined />
                </div>
              </div>
            </div>
          </template>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import {
  LogoutOutlined,
  AppstoreOutlined,
  DownOutlined,
  UpOutlined,
  BellOutlined,
} from '@ant-design/icons-vue';
import { Dropdown, Avatar, Badge } from 'ant-design-vue';
import { HeaderUserMenu } from '../interface';

export default defineComponent({
  name: 'Header',
  components: {
    LogoutOutlined,
    AppstoreOutlined,
    DownOutlined,
    UpOutlined,
    BellOutlined,
    Dropdown,
    Avatar,
    Badge,
  },
  props: {
    logoUrl: {
      type: String,
      default: '',
    },
    logoLink: {
      type: String,
      default: '',
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
  },
  emits: ['logOut', 'clickBell'],
  setup(props, { emit }) {
    const manageMenuVisible = ref(false);
    const isDrawerClose = ref(true);
    function clickBellHandler() {
      emit('clickBell');
    }
    return {
      manageMenuVisible,
      isDrawerClose,
      clickBellHandler,
    };
  },
  data() {
    return {
      menuArrowStyle: {
        marginLeft: '4.8px',
        fontSize: '10px',
        width: '12px',
      },
      bellStyle: {
        color: '#98B3C8',
        fontSize: '18px',
      },
    };
  },
});
</script>

<style lang="scss" scoped>
a,
a:active,
a:hover {
  color: inherit;
}
.header {
  /* display: grid;
  grid-template-columns: 72px 1fr; */
  background-color: $header-bg;
  &__container {
    display: grid;
    grid-template-columns: min-content auto;
    padding-left: 32px;
    height: 72px;
  }
  &__logo {
    font-weight: bold;
    font-size: large;
    font-style: italic;
    padding-top: 14px;
    line-height: 20px;
    animation: Color 4s linear infinite;
  }
  &__user {
    justify-self: flex-end;
    display: flex;
    align-items: center;
  }

  &__user {
    color: $header-text;
    &-notification {
      display: grid;
      align-items: center;
      padding: 0 30px 0 20px;
      height: 100%;
      cursor: pointer;
      &:hover {
        background-color: $header-hover-bg;
      }
    }
    &-info {
      min-width: 160px;
      display: flex;
      padding: 0 10px;
      flex-direction: row;
      align-items: center;
      height: 100%;
      &:hover {
        background-color: $header-hover-bg;
      }
      &__avatar {
        margin-right: 10px;
      }
    }

    &-manage {
      display: flex;
      padding: 0 10px;
      align-items: center;
      min-width: 100px;
      height: 100%;
      &:hover {
        background-color: $header-hover-bg;
      }
      &__icon {
        margin-left: 4.8px;
        font-size: 10px;
        width: 12px;
      }
    }
    &-manage__menu {
      margin-top: -4px;
      &-item {
        color: $header-text;
        height: 40px;
        line-height: 40px;
        background-color: $header-dropdown-bg;
        &:hover {
          background-color: $header-dropdown-hover-bg;
        }
        i {
          margin-left: 12.3px;
        }
        a,
        div {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
        }
      }
    }
  }
}
.header__user-manage__menu-item__span {
  padding-right: 16px;
}
</style>
<style>
.header .ant-badge-count {
  box-shadow: none;
}
@keyframes Color {
  0% {
    color: #3ef536;
  }

  20% {
    color: #674ef5;
  }

  40% {
    color: #ffce54;
  }

  60% {
    color: #fc6e51;
  }

  80% {
    color: #ed5565;
  }

  100% {
    color: #f55bb1;
  }
}
</style>
