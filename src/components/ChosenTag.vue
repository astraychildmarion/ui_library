<template>
  <div class="multiTag-input__outer" :class="`multiTag-input-${idRandom}`">
    <div class="multiTag-input" :class="{ edit: showPen || editMode, chosen: tagChosen }">
      <div v-if="readonly">
        <div class="multiTag-input__show">
          <div
            v-if="displayText.length > 0"
            class="multiTag-input__text multiTag-input__text-readonly"
            data-e2e="multiTag-input-text"
            @click="clickTurnBlue"
          >
            <Tooltip v-if="showTooltip" placement="top" :color="`#051322e6`">
              <template #title>
                <div>{{ displayText }}</div>
              </template>
              <div>{{ displayText }}</div>
            </Tooltip>
            <template v-else>
              <div>{{ displayText }}</div>
            </template>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          v-if="!editMode"
          class="multiTag-input__show"
          @mouseenter="showPenHandler"
          @mouseleave="showPenHandler"
        >
          <div
            v-if="displayText.length > 0"
            class="multiTag-input__text"
            data-e2e="multiTag-input-text"
            @click="clickTurnBlue"
          >
            <Tooltip v-if="showTooltip" placement="top" :color="`#051322e6`">
              <template #title>
                <div>{{ displayText }}</div>
              </template>
              <div>{{ displayText }}</div>
            </Tooltip>
            <template v-else>
              <div>{{ displayText }}</div>
            </template>
          </div>
          <div class="multiTag-input__icon" @click="clickPen">
            <div v-show="showPen && !tagChosen" data-e2e="multiTag-pencil">
              <EditOutlined style="color: #5c666f; font-size: 14px" />
            </div>
          </div>
        </div>
        <div v-show="editMode" class="multiTag-input__wrapper">
          <Input
            :id="`multiTag-${idRandom}`"
            v-model:value="inputText"
            data-e2e="multiTag-input"
            @pressEnter="pressEnter"
            @keydown="checkKeydown"
            @paste="checkPaste"
          />
          <div class="multiTag-input__icon" data-e2e="multiTag-trash" @click="clickTrash">
            <DeleteOutlined style="color: #5c666f; font-size: 13px; margin-right: 8px" />
          </div>
          <div class="multiTag-input__count" :class="{ error: countOversize }">
            {{ count }}/{{ limitCount }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <ConfirmModal
    :is-show="showModal"
    :title="modalTitle"
    :content="modalContent"
    confirm-type="warning"
    @clickConfirm="clickModalConfirm"
    @clickCancel="clickModalCancel"
  />
</template>
<script lang="ts" setup>
import { ref, watch, computed, nextTick, onMounted } from 'vue';
import { Input, Tooltip } from 'ant-design-vue';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons-vue';
import ConfirmModal from './ConfirmModal.vue';
import {
  rexEngNumZh,
  excludeRexEngNumZh,
  noAllowedCharacter,
  handlerValidation,
  checkKeydownValidation,
  checkPasteValidation,
} from '../utils/rexValidation';
import type { tagEditModeType } from './interface';

interface Props {
  text?: string;
  limitCount?: number;
  readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: 'tag',
  limitCount: 50,
  readonly: false,
});

interface Emits {
  // eslint-disable-next-line no-unused-vars
  (e: 'renameTag', payload: { old: string; new: string }): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'deleteTag', payload: string): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'chooseTag', payload: string): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'cancelTag', payload: string): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'editModeEvent', payload: tagEditModeType): void;
}
const emit = defineEmits<Emits>();
// create unique id for element
const idRandom = Math.floor(Math.random() * 100000);
const displayText = ref<string>(props.text);
const inputText = ref<string>('');
const showPen = ref<boolean>(false);
const editMode = ref<boolean>(false);
const tagChosen = ref<boolean>(false);
const countOversize = ref<boolean>(false);
// for confirm modal
const deleteTagTitle = 'Delete tag';
const renameTagTitle = 'Rename tag';
const deleteTagText = 'Are you sure you want to delete the tag?';
const renameTagText = 'Are you sure you want to rename the tag?';
const showModal = ref<boolean>(false);
const modalTitle = ref<string>('');
const modalContent = ref<string>('');
const count = computed(() => inputText.value.length);
const validation = ref<boolean>(true);
const showTooltip = ref<boolean>(false);
const checkEllipsis = () => {
  nextTick(() => {
    const element = document.querySelector(
      `.multiTag-input-${idRandom} .multiTag-input__text`,
    )?.clientWidth;
    if (element && element < 136) {
      showTooltip.value = false;
    } else {
      showTooltip.value = true;
    }
  });
};
const setInputWidth = () => {
  const multiTag = document.getElementById(`multiTag-${idRandom}`);
  if (multiTag) {
    multiTag.style.width = `${inputText.value.length * 6 + 24}px`;
  }
};
const clickTurnBlue = () => {
  tagChosen.value = !tagChosen.value;
  if (tagChosen.value) {
    emit('chooseTag', displayText.value);
  } else {
    emit('cancelTag', displayText.value);
  }
};
const clickPen = () => {
  editMode.value = true;
  showPen.value = false;
  inputText.value = displayText.value;
  setInputWidth();
  if (inputText.value.length > props.limitCount) countOversize.value = true;
  nextTick(() => {
    document.getElementById(`multiTag-${idRandom}`)?.focus();
  });
};
const clickTrash = () => {
  modalTitle.value = deleteTagTitle;
  modalContent.value = deleteTagText;
  showModal.value = true;
};
const showPenHandler = () => {
  showPen.value = !showPen.value;
};
const pressCancel = () => {
  editMode.value = false;
  inputText.value = displayText.value;
  countOversize.value = false;
  validation.value = true;
  checkEllipsis();
};
const pressEnter = () => {
  validation.value = handlerValidation(inputText.value, rexEngNumZh, noAllowedCharacter);
  if (
    inputText.value.length <= props.limitCount &&
    displayText.value !== inputText.value &&
    validation.value &&
    inputText.value.length > 0
  ) {
    modalTitle.value = renameTagTitle;
    modalContent.value = renameTagText;
    showModal.value = true;
  } else if (displayText.value === inputText.value) pressCancel();
};
const clickModalCancel = () => {
  pressCancel();
  showModal.value = false;
};
const clickModalConfirm = () => {
  if (modalTitle.value === deleteTagTitle) {
    emit('deleteTag', displayText.value);
  } else {
    const obj = { old: displayText.value, new: inputText.value };
    emit('renameTag', obj);
    checkEllipsis();
  }
  editMode.value = false;
  countOversize.value = false;
  showModal.value = false;
};

const keyupChecker = (event: any) => {
  validation.value = handlerValidation(inputText.value, rexEngNumZh, noAllowedCharacter);
  setInputWidth();
  if (event.code === 'Escape') pressCancel();
  else if (inputText.value.length <= props.limitCount) {
    countOversize.value = false;
  } else {
    countOversize.value = true;
  }
};

const checkKeydown = (e: any) => {
  checkKeydownValidation(noAllowedCharacter, excludeRexEngNumZh, e);
};
const checkPaste = (e: any) => {
  checkPasteValidation(rexEngNumZh, e);
};

const checkClickPlace = (event: any) => {
  const list = event.composedPath();
  const classList = list.filter((item: any) => typeof item.className === 'string');
  // checkClickCurrentTag: user did not click any tag or modal, should trigger pressEnter
  const checkClickCurrentTag = classList.filter(
    (element: any) =>
      element.className.indexOf(`multiTag-input-${idRandom}`) > -1 ||
      element.className.indexOf('ant-modal') > -1,
  );
  // checkClickOtherTags:
  // user clicks 1 tag and click other tags should cancel current tag's edit mode
  const checkClickOtherTags = classList.filter(
    (element: any) =>
      element.className.indexOf(`multiTag-input-${idRandom}`) === -1 &&
      element.className.indexOf('multiTag-input__outer') > -1,
  );
  if (checkClickOtherTags.length > 0) {
    pressCancel();
  } else if (checkClickCurrentTag.length < 1) {
    validation.value = handlerValidation(inputText.value, rexEngNumZh, noAllowedCharacter);
    if (
      (inputText.value.length > props.limitCount)
        || inputText.value.length === 0
        || !validation.value
      ) {
      pressCancel();
    } else pressEnter();
  }
};
onMounted(() => {
  checkEllipsis();
});
watch(
  () => props.text,
  (n) => {
    displayText.value = n;
  },
);
watch(
  () => editMode.value,
  (n) => {
    emit('editModeEvent', { element: `multiTag-input-${idRandom}`, edit: n });
    const target = document.getElementById(`multiTag-${idRandom}`);
    if (n) {
      target?.addEventListener('keyup', keyupChecker);
      document?.addEventListener('click', checkClickPlace);
    } else {
      target?.removeEventListener('keyup', keyupChecker);
      document?.removeEventListener('click', checkClickPlace);
    }
  },
);
</script>
<style lang="scss">
.multiTag-input {
  background-color: $chosenTag-bg;
  border: 1px solid $chosenTag-border;
  border-radius: 16px;
  width: fit-content;
  max-width: 220px;
  height: 24px;
  &.edit {
    background-color: $chosenTag-chosen-border;
    border: 1px solid $chosenTag-chosen-border;
  }
  &.chosen {
    background-color: $chosenTag-chosen-bg;
    border: 1px solid $chosenTag-chosen-border;
    .multiTag-input__text {
      color: $chosenTag-chosen-input;
    }
  }
  &__show {
    display: flex;
    align-items: center;
    line-break: anywhere;
    padding-left: 8px;
  }
  &__wrapper {
    display: flex;
    .ant-input {
      border: none;
      &:hover {
        border: none;
        box-shadow: none;
      }
    }
    input {
      background-color: transparent;
      font-size: 12px;
      padding: 2px 0px 2px 16px;
      min-width: 24px;
      max-width: 136px;
      color: $chosenTag-count-color;
      &:focus-visible {
        outline: none;
        border: none;
        box-shadow: none;
      }
    }
  }
  &__width-control {
    position: relative;
  }
  &__text {
    color: $chosenTag-color;
    font-size: 12px;
    cursor: pointer;
    padding-left: 8px;
    height: 24px;
    overflow: hidden;
    font-weight: normal;
    max-width: 136px;
    &-readonly {
      padding-right: 16px;
    }
    > div {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 22px;
    }
  }
  &__count {
    color: $chosenTag-count-color;
    font-size: 12px;
    padding-right: 16px;
    line-height: 24px;
    height: 24px;
    font-weight: normal;
    &.error {
      color: $danger-color;
    }
  }
  &__icon {
    width: 20px;
    cursor: pointer;
    padding: 0 2px;
    line-height: 24px;
    position: relative;
    right: 0px;
    top: -2px;
  }
}
</style>
