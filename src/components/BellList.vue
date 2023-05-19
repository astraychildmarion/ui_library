<template>
  <transition name="list">
    <div v-show="isShow" class="bell-list__wrapper" data-e2e="bell-list-wrapper">
      <template v-if="dataSource.length > 0">
        <div
          v-for="card in dataSource"
          :key="card.id"
          class="bell-list__card"
          :class="{ 'old-card': card.read }"
          data-e2e="bell-list-card"
        >
          <div class="bell-list__card-title" data-e2e="bell-list-card-title">
            <div>{{ card.title }}</div>
          </div>
          <div
            v-if="card.subtitle"
            class="bell-list__card-subtitle"
            data-e2e="bell-list-card-subtitle"
          >
            <div>{{ card.subtitle }}</div>
          </div>
          <div class="bell-list__card-content" data-e2e="bell-list-card-content">
            {{ card.content }}
          </div>
          <div class="bell-list__card-footer" data-e2e="bell-list-card-footer">
            {{ convertToDate(card.timestamp) }}
          </div>
        </div>
      </template>
      <div v-if="isNoData" class="bell-list__nodata" data-e2e="bell-list-nodata">
        <Empty key="empty" :image="emptyImage" />
      </div>
      <transition name="fade">
        <div
          v-show="isShowLoading"
          key="noShow"
          class="bell-list__loading"
          data-e2e="bell-list-loading"
        >
          <Skeleton active :loading="isShowLoading" />
        </div>
      </transition>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, PropType, onMounted, onUnmounted, watch } from 'vue';
import { Skeleton, Empty } from 'ant-design-vue';
/* eslint-disable import/no-extraneous-dependencies */
import debounce from 'lodash/debounce';
import { BellCardDataType } from './interface';

export default defineComponent({
  name: 'BellCard',
  components: { Skeleton, Empty },
  props: {
    dataSource: {
      type: Array as PropType<BellCardDataType[]>,
      default: () => [],
    },
    isShowLoading: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    isShow: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    isNoData: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['infiniteScroll', 'clickOutside'],
  setup(props, { emit }) {
    const infiniteScrollEvent = debounce(() => {
      const cardList = document.querySelector('.bell-list__wrapper');
      if (props.isShowLoading) {
        if (
          cardList &&
          cardList.scrollHeight - cardList?.scrollTop - 150 <= cardList?.clientHeight
        ) {
          emit('infiniteScroll');
        }
      }
    }, 1000);
    const convertToDate = (newDate: number) => {
      const thatDate = new Date(newDate);
      const newArray = thatDate.toISOString().split('T');
      let formated = newArray[0].replace(/-/i, '/');
      formated = formated.replace(/-/i, '/');
      return formated;
    };
    const clickAndCloseBelllist = (event: any) => {
      const list = event.composedPath();
      const classList = list.filter((item: any) => typeof item.className === 'string');
      const checkedList = classList.filter(
        (element: any) =>
          element.className.indexOf('bell-list') > -1 ||
          element.className.indexOf('header__user-notification') > -1,
      );
      if (checkedList.length < 1) emit('clickOutside');
    };
    watch(
      () => props.isShow,
      (n) => {
        if (!n) {
          const cardList = document.querySelector('.bell-list__wrapper');
          if (cardList) {
            cardList?.removeEventListener('scroll', infiniteScrollEvent);
            cardList.scrollTop = 0;
          }
          document.removeEventListener('click', clickAndCloseBelllist);
          document.removeEventListener('change', clickAndCloseBelllist);
        } else {
          const cardList = document.querySelector('.bell-list__wrapper');
          if (cardList) cardList?.addEventListener('scroll', infiniteScrollEvent);
          document.addEventListener('click', clickAndCloseBelllist);
          document.addEventListener('change', clickAndCloseBelllist);
        }
      },
    );
    onMounted(() => {
      const cardList = document.querySelector('.bell-list__wrapper');
      cardList?.addEventListener('scroll', infiniteScrollEvent);
    });
    onUnmounted(() => {
      const cardList = document.querySelector('.bell-list__wrapper');
      cardList?.removeEventListener('scroll', infiniteScrollEvent);
    });
    const emptyImage: any = Empty.PRESENTED_IMAGE_SIMPLE;
    return {
      convertToDate,
      emptyImage,
    };
  },
});
</script>
<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.bell-list {
  &__wrapper {
    background-color: white;
    width: 288px;
    max-height: 400px;
    overflow-y: auto;
    box-shadow: 0 5px 9px 4px rgba(0, 0, 0, 0.05);
  }
  &__card {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px 24px 12px;
    &:last-child {
      border-bottom: none;
    }
    &-title {
      color: $bell-list-title-color;
      line-height: 1.5;
      vertical-align: middle;
      height: auto;
      font-size: 1.143rem;
      font-weight: bold;
      margin-bottom: 8px;
    }
    &-subtitle {
      color: $bell-list-subtitle-color;
      line-height: 1.57;
      vertical-align: middle;
      height: 22px;
      font-weight: 500;
      margin-bottom: 2px;
    }
    &-content {
      color: $bell-list-content-color;
      line-height: 1.57;
      overflow-wrap: break-word;
      margin-bottom: 8px;
    }
    &-footer {
      font-size: 10px;
      text-align: right;
      color: $bell-list-content-color;
      line-height: 1.5;
      height: 17px;
      font-size: 0.714rem;
      line-height: 1.7;
    }
    &.old-card {
      .bell-list__card-title,
      .bell-list__card-subtitle,
      .bell-list__card-content,
      .bell-list__card-footer {
        color: $bell-list-content-old-color;
      }
    }
  }
  &__hint {
    text-align: center;
    padding: 16px 0;
  }
  &__loading {
    padding: 16px 24px 8px;
  }
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  border-radius: 40px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: $scroll-thumb-color;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: $scroll-thumb-color-hover;
}

::-webkit-scrollbar-track:hover {
  background: $scroll-track-color-hover;
}
</style>
