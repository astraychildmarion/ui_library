<template>
  <div class="pencil-input" :style="currentStyle">
    <div class="pencil-input__show">
      <div
        v-show="!editMode"
        class="pencil-input__text"
        data-e2e="pencil-input-text"
        :class="`pencil-text-${idRandom}`"
      >
        <Tooltip v-if="isShowTooltip" placement="top" :color="`#051322e6`">
          <template #title>
            <div>{{ showText }}</div>
          </template>
          <div class="display__dot">{{ showText }}</div>
        </Tooltip>
        <div v-else class="display__dot">{{ showText }}</div>
      </div>
      <div
        v-show="!editMode"
        class="pencil-input__icon"
        data-e2e="pencil"
        @click.prevent="clickPen"
      >
        <EditOutlined style="color: #969ca1; font-size: 15px" />
      </div>
    </div>
    <div
      v-show="editMode"
      class="pencil-input__wrapper"
      :class="{ error: countOversize || apiFeedbackError || showInvaildText }"
    >
      <Input
        :id="`pencil-input-${idRandom}`"
        v-model:value="inputText"
        class="pencil-input"
        data-e2e="pencil-input"
        @pressEnter="pressEnter"
        @change="(payload) => $emit('change', payload.target.value)"
      />
      <div class="pencil-input__count">{{ count }}/{{ limitCount }}</div>
    </div>
    <div v-show="apiFeedbackError && editMode" class="pencil-input__error">
      {{ apiErrorText }}
    </div>
    <div v-show="showInvaildText" class="pencil-input__error">
      {{ invaildText }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, computed, nextTick, onMounted } from 'vue';
import { Input, Tooltip } from 'ant-design-vue';
import { EditOutlined } from '@ant-design/icons-vue';
import { rexEngNum, noAllowedCharacter, handlerValidation } from '../utils/rexValidation';

interface Props {
  text?: string;
  limitCount?: number;
  invaildText?: string;
  apiErrorText?: string;
  apiError?: boolean;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: '',
  limitCount: 100,
  invaildText: 'Invalid name',
  apiErrorText: 'Name already exists!',
  apiError: false,
  size: 'default',
});

interface Emits {
  // eslint-disable-next-line no-unused-vars
  (e: 'pressEnter', payload: string): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'editModeEvent', payload: boolean): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'change', payload: string): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'triggerInvalid', payload: string): void;
}

const emit = defineEmits<Emits>();
const smallStyle: any = {
  '--text-max-width': '266px',
  '--text-size': '16px',
  '--count-size': '12px',
  '--height': '24px',
  '--text-justify': 'space-between',
  '--wrapper-width': 'auto',
  '--input-maxWidth': 'auto',
};
const defaultStyle: any = {
  '--text-max-width': '406px',
  '--text-size': '24px',
  '--count-size': '14px',
  '--height': '40px',
  '--text-justify': 'flex-start',
  '--wrapper-width': 'fit-content',
  '--input-maxWidth': '380px',
};
const currentStyle = computed(() => {
  if (props.size === 'default') return defaultStyle;
  return smallStyle;
});
const showText = ref<string>(props.text);
const originalText = ref<string>(props.text);
const inputText = ref<string>('');
const editMode = ref<boolean>(false);
const apiFeedbackError = ref<boolean>(false);
const showInvaildText = ref<boolean>(false);
const idRandom = Math.floor(Math.random() * 100000);
const validation = ref<boolean>(true);
const isShowTooltip = ref<boolean>(false);
const countOversize = computed(() => {
  if (inputText.value.length > props.limitCount) return true;
  return false;
});
const count = computed(() => inputText.value.length);
const handlerPencilTooltip = (tagElement: string) => {
  nextTick(() => {
    isShowTooltip.value = false;
    const element = document.querySelector(`.${tagElement}`);
    const styleWidth = parseInt(currentStyle.value['--text-max-width'].slice(0, 3), 10);
    if (element && element.clientWidth >= styleWidth) {
      isShowTooltip.value = true;
    }
  });
};
const pressCancel = () => {
  editMode.value = false;
  inputText.value = '';
  apiFeedbackError.value = false;
  showInvaildText.value = false;
  validation.value = true;
  showText.value = originalText.value;
  emit('editModeEvent', false);
};
const pressEnter = () => {
  if (inputText.value === originalText.value) {
    pressCancel();
  } else {
    validation.value = handlerValidation(inputText.value, rexEngNum, noAllowedCharacter);
    if (inputText.value.length < 1 || !validation.value) {
      emit('triggerInvalid', inputText.value);
      showInvaildText.value = true;
    } else if (!countOversize.value) {
      emit('pressEnter', inputText.value);
      editMode.value = false;
      apiFeedbackError.value = false;
      showInvaildText.value = false;
      validation.value = false;
      showText.value = inputText.value;
      inputText.value = '';
      emit('editModeEvent', false);
    }
  }
};
const setInputWidth = () => {
  const pencileInput = document.getElementById(`pencil-input-${idRandom}`);
  if (pencileInput) {
    pencileInput.style.width = `${inputText.value.length * 16 + 48}px`;
  }
};
const clickPen = () => {
  editMode.value = true;
  emit('editModeEvent', true);
};

const listenToKeyup = (event: any) => {
  apiFeedbackError.value = false;
  validation.value = handlerValidation(inputText.value, rexEngNum, noAllowedCharacter);
  if (props.size === 'default') setInputWidth();
  if (event.code === 'Escape') pressCancel();
  if (!validation.value) {
    showInvaildText.value = true;
    emit('triggerInvalid', inputText.value);
  }
  if (inputText.value.length > 0 && validation.value) showInvaildText.value = false;
};
watch(
  () => props.text,
  (n) => {
    showText.value = n;
    originalText.value = n;
    handlerPencilTooltip(`pencil-text-${idRandom}`);
  },
);

watch(
  () => editMode.value,
  (n) => {
    if (n) {
      nextTick(() => {
        const target = document.getElementById(`pencil-input-${idRandom}`);
        inputText.value = showText.value;
        if (props.size === 'default') setInputWidth();
        target?.addEventListener('keyup', listenToKeyup);
        target?.addEventListener('blur', pressEnter);
        target?.focus();
      });
    } else {
      const target = document.getElementById(`pencil-input-${idRandom}`);
      target?.removeEventListener('keyup', listenToKeyup);
      target?.removeEventListener('blur', pressEnter);
      handlerPencilTooltip(`pencil-text-${idRandom}`);
    }
  },
);
watch(
  () => props.apiError,
  (n) => {
    if (n) {
      apiFeedbackError.value = n;
      editMode.value = true;
      emit('editModeEvent', true);
    }
  },
  { immediate: true },
);
onMounted(() => {
  handlerPencilTooltip(`pencil-text-${idRandom}`);
});

defineExpose({
  pressCancel,
});
</script>
<style lang="scss" scoped>
.pencil-input {
  &__show {
    display: flex;
    align-items: center;
    justify-content: var(--text-justify);
  }
  &__text {
    font-size: var(--text-size);
    font-weight: bold;
    color: #102e4d;
    max-width: var(--text-max-width);
    height: var(--height);
    overflow: hidden;
  }
  &__icon {
    color: $divider-bg-color;
    margin-left: 16px;
    cursor: pointer;
    width: 30px;
  }
  &__wrapper {
    border-bottom: 1px solid $primary-color;
    display: flex;
    align-items: center;
    justify-content: var(--text-justify);
    width: var(--wrapper-width);
    .ant-input {
      border: none;
      font-size: var(--text-size);
      font-weight: bold;
      color: #102e4d;
      background-color: transparent;
      padding: 0px;
      max-width: var(--input-maxWidth);
      &:focus-visible {
        outline: none;
        border: none;
        box-shadow: none;
      }
      &:hover {
        border: none;
        box-shadow: none;
      }
    }
    &.error {
      border-bottom: 1px solid $danger-color;
      .ant-input {
        color: $danger-color;
      }
      .pencil-input__count {
        color: $danger-color;
      }
    }
  }
  &__count {
    font-size: var(--count-size);
    color: #babec1;
    margin-left: 16px;
    font-weight: 400;
  }
  &__error {
    color: $danger-color;
    background-color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    height: 20px;
    margin-top: 4px;
  }
}
.display__dot {
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
