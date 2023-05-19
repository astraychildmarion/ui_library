<template>
  <div id="pencil-area-wrapper">
    <TextArea
    v-model:value="inputText"
    show-count
    :maxlength="100"
    :auto-size="{ minRows: 1, maxRows: 3 }"
    data-e2e="pencil-input"
    @pressEnter="pressEnter"
    />
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent, ref, watch, onMounted } from 'vue';
import { Input } from 'ant-design-vue';
import { EditOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'PencilInput',
  components: { TextArea: Input.TextArea, EditOutlined, CheckOutlined, CloseOutlined },
  props: {
    text: {
      required: true,
      type: String as PropType<string>,
    },
  },
  emits: ['pressEnter', 'editModeEvent'],
  setup(props, { emit }) {
    const showText = ref<string>(props.text);
    const inputText = ref<string>('');
    const editMode = ref<boolean>(false);
    const clickPen = () => {
      emit('editModeEvent', true);
      editMode.value = true;
      inputText.value = showText.value;
    };
    const pressEnter = () => {
      if (inputText.value.length > 100) {
        inputText.value = inputText.value.substring(0, 100);
      }
      emit('pressEnter', inputText.value);
      editMode.value = false;
      emit('editModeEvent', false);
    };
    const pressCancel = () => {
      editMode.value = false;
      inputText.value = '';
      emit('editModeEvent', false);
    };
    watch(
      () => props.text,
      (n) => {
        showText.value = n;
      },
    );

    onMounted(() => {
      const target = document.querySelector('.pencil-input .ant-input-textarea textarea');
      target?.addEventListener('keyup', (event: any) => {
        if (event.code === 'Escape') pressCancel();
      });
    });
    return {
      showText,
      inputText,
      editMode,
      clickPen,
      pressEnter,
      pressCancel,
    };
  },
});
</script>
<style lang="scss" scoped>
.pencil-input .ant-input-textarea-show-count::after {
  font-size: 12px;
  padding-right: 72px;
  padding-top: 5px;
  height: 19px;
  line-height: 1.75;
}
.pencil-input {
  position: relative;
  &__show {
    display: flex;
    align-items: center;
  }
  &__wrapper {
    width: 450px;
  }
  &__text {
    font-weight: bold;
    color: $pencil-title-color;
    font-size: 24px;
    max-width: 850px;
    line-break: anywhere;
  }
  &__icon {
    font-weight: bold;
    margin-left: 10px;
    cursor: pointer;
    &-wrapper {
      display: flex;
      position: relative;
      top: -20px;
      left: 382px;
      font-size: 16px;
      line-height: 21px;
    }
  }
  &__icon-check {
    padding: 4px 8px;
    cursor: pointer;
    border: $box-border;
    border-radius: 2px;
  }
}
</style>