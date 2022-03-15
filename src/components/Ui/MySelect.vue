<template>
  <div class="select">
    <div
      class="select-default"
      :class="[
        [
          visible ? 'select-default-active' : '',
          defaultValue !== 'Placeholder' ? 'select-default-name' : '',
        ],
        classes,
      ]"
      tabindex="0"
      @click="showSelect"
      ref="select"
    >
      {{ defaultValue }}
      <div class="select-icon" :class="[visible ? 'select-icon-active' : '']">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          fill="#ccc"
        >
          <path
            d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
          />
        </svg>
      </div>
    </div>

    <transition name="down-fade">
      <div class="select-content" v-if="visible" ref="content">
        <div class="select-content-input">
          <my-input
            :placeholder="value"
            :isHover="true"
            :class="['select-content-default']"
          />
        </div>

        <div class="select-items">
          <my-radiobutton
            @getTitle="setTitle"
            :item="item"
            :key="item.id"
            :active="item.title === defaultValue"
            v-for="item in items"
          />
          <info-block :value="defaultValue" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import MyInput from "./MyInput.vue";
import MyRadiobutton from "./MyRadiobutton.vue";
import InfoBlock from "../InfoBlock.vue";

export default {
  components: { MyInput, MyRadiobutton, InfoBlock },
  props: {
    type: {
      type: String,
      default: "Placeholder",
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isHovered: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const value = "Search";
    const defaultValue = ref(props.type);
    const items = [
      { id: 1, title: "Первый" },
      { id: 2, title: "Второй" },
      { id: 3, title: "Третий" },
      { id: 4, title: "Четвертый" },
      { id: 5, title: "Пятый" },
      { id: 6, title: "Шестой" },
      { id: 7, title: "Седьмой" },
      { id: 8, title: "Восьмой" },
      { id: 9, title: "Девятый" },
    ];
    const select = ref();
    const focused = ref(false);
    const content = ref(null);

    const visible = ref(false);

    const showSelect = () => {
      console.log(visible.value);

      visible.value = !visible.value;
      console.log(visible.value);
    };

    const hideSelect = () => {
      visible.value = false;
    };

    const setTitle = (item) => {
      defaultValue.value = item;
      visible.value = false;
    };

    const focus = () => {
      focused.value = true;
      select.value.focus();
    };

    const classes = computed(() => {
      return {
        ["select-default-alert"]: props.hasError,
        ["select-default-disabled"]: props.isDisabled,
        ["select-default-hovered"]: props.isHovered,
      };
    });

    onMounted(() => {
      if (props.autoFocus) {
        focus();
      }
      document.addEventListener(
        "click",
        (e) => {
          if (e.path.includes(content.value)) {
            return;
          } else if (!e.path.includes(select.value)) {
            hideSelect();
          }
        },

        true
      );
    });

    return {
      value,
      items,
      visible,
      classes,
      select,
      content,
      focused,
      defaultValue,
      showSelect,
      focus,
      setTitle,
      hideSelect,
    };
  },
};
</script>

<style lang="less" scoped>
.select {
  position: relative;
  margin: 3rem 2rem;
  width: 32rem;
  font-size: 1.6rem;
  &-icon {
    position: absolute;
    top: 50%;
    width: 10px;
    margin: -8px 0;
    right: 1rem;
    transition: all 0.3s ease;
    svg {
      transition: all 0.3s ease;
    }
    &-active {
      transform: rotate(180deg);
      & svg {
        fill: #857b94cc;
      }
    }
  }
  &-items {
    height: 24.5rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: #b4b2b8;
        border-radius: 0.5rem;
        // box-shadow: inset 0.1rem 0.1rem 1rem #f3faf7;
      }
    }
  }
  &-default {
    padding: 1rem 2rem;
    border: 0.2rem solid #e6e4e9;
    border-radius: 0.8rem;
    color: #bdb8c4;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      color: #b0aabb;
      border-color: #c8c5cf;
      & > .select-icon svg {
        fill: #857b94;
      }
    }
    &:focus {
      outline: none;
      border: 0.2rem solid #d2bcf2;
    }
    &-active {
      border: 0.2rem solid #7a6f8b85;
    }
    &-name {
      color: #716780;
    }
    &-disabled {
      pointer-events: none;
      border-color: #f2f0f5;
      color: #d9d6de;
      & > .select-icon svg {
        fill: #e4e1ea;
      }
    }
    &-hovered {
      color: #b0aabb;
      border-color: #c8c5cf;
      & > .select-icon svg {
        fill: #857b94;
      }
    }
    &-alert {
      border-color: #e1354f8c;
      &:hover {
        border-color: #e1354f8c;
      }
    }
  }
  &-content {
    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;

    border-radius: 0.8rem;
    box-shadow: 0 0 3px;
    padding: 0.5rem;
    color: gray;
    z-index: 99;
    &-default {
      margin-bottom: 1rem;
    }
  }
  &-options {
    padding: 1rem 2rem;
    color: gray;
    &:hover {
      background: #adadf555;
    }
  }
}

.down-fade-enter-active {
  transition: all 0.3s ease-out;
}

.down-fade-leave-active {
  transition: all 0.3s ease-out;
}

.down-fade-enter-from,
.down-fade-leave-to {
  transform: translateY(-2rem);
  opacity: 0;
}
</style>