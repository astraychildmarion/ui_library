<template>
  <div ref="divref" class="confirm-modal__ref" data-e2e="confirm-modal"></div>
  <div>
    <Modal
      v-model:visible="propsIsShow"
      :closable="false"
      :mask-closable="false"
      :keyboard="false"
      :get-container="getContainer"
      :style="setConfirmStyle"
      centered
      width="416px"
    >
      <div class="ant-modal-confirm-body-wrapper">
        <Space size="middle" align="start" class="ant-modal-confirm-body">
          <WarningFilled v-if="confirmType === 'warning'" style="font-size: 22px" />
          <ExclamationCircleFilled v-if="confirmType == 'danger'" style="font-size: 22px" />
          <CheckCircleFilled v-if="confirmType == 'safe'" style="font-size: 22px" />
          <InfoCircleFilled v-if="confirmType == 'info'" style="font-size: 22px" />
          <Space size="small" direction="vertical">
            <span class="ant-modal-confirm-title" data-e2e="confirm-modal-title">{{ title }}</span>
            <span class="ant-modal-confirm-content" data-e2e="confirm-modal-content">
              {{ content }}
            </span>
          </Space>
        </Space>
      </div>
      <template #footer>
        <Button data-e2e="confirm-modal-btn-cancel" @click="handleCancel">
          {{ cancelButtonText }}
        </Button>
        <Button class="confirm-modal-btn-ok" data-e2e="confirm-modal-btn-ok" @click="handleOk">
          {{ confirmButtonText }}
        </Button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue';
import { Modal, Space, Button } from 'ant-design-vue';
import {
  WarningFilled,
  ExclamationCircleFilled,
  CheckCircleFilled,
  InfoCircleFilled,
} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'ConfirmModal',
  components: {
    Modal,
    Space,
    Button,
    WarningFilled,
    ExclamationCircleFilled,
    CheckCircleFilled,
    InfoCircleFilled,
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    confirmType: {
      type: String,
      default: 'danger',
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel',
    },
    confirmButtonText: {
      type: String,
      default: 'Confirm',
    },
    title: {
      type: String,
      default: 'Title',
    },
    content: {
      type: String,
      default: 'Content',
    },
  },
  emits: ['clickConfirm', 'clickCancel'],
  setup(props: any, { emit }) {
    const propsIsShow = ref(props.isShow);
    const divref = ref();
    const getContainer = () => divref.value;

    const handleOk = () => {
      emit('clickConfirm');
    };
    const handleCancel = () => {
      emit('clickCancel');
    };
    const safe: any = {
      '--text': '#37C5A0',
      '--border': '#37C5A0',
      '--bg': '#37C5A0',
    };
    const info: any = {
      '--text': '#54B4E0',
      '--border': '#54B4E0',
      '--bg': '#54B4E0',
    };
    const warning: any = {
      '--text': '#ED952E',
      '--border': '#ED952E',
      '--bg': '#ED952E',
    };
    const danger: any = {
      '--text': '#EF476F',
      '--border': '#EF476F',
      '--bg': '#EF476F',
    };
    const setConfirmStyle = computed(() => {
      if (props.confirmType === 'danger') return danger;
      if (props.confirmType === 'warning') return warning;
      if (props.confirmType === 'info') return info;
      if (props.confirmType === 'safe') return safe;
      return info;
    });

    watch(
      () => props.isShow,
      (n) => {
        propsIsShow.value = n;
      },
    );
    return {
      getContainer,
      handleCancel,
      handleOk,
      setConfirmStyle,
      divref,
      propsIsShow,
    };
  },
});
</script>

<style lang="scss" scoped>
:deep(.ant-modal-footer) {
  border-top: none;
}
.confirm-modal__ref .confirm-modal {
  .ant-modal-confirm-title {
    border-bottom: none;
    font-weight: bold;
    font-size: 16px;
  }

  .ant-modal-confirm-content {
    background-color: #fff;
    color: #5c666f;
    font-size: 16px;
  }
}
.confirm-modal-btn-ok {
  color: #fff;
  background-color: var(--bg);
  border-color: var(--border);
}
:deep(.ant-modal-body) {
  background-color: #fff;
  padding: 24px;
  .anticon {
    color: var(--text);
  }
}
</style>
