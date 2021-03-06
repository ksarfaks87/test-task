<template>
  <div class="input">
    <label class="label" :class="classes">
      <input
        class="label-input"
        type="text"
        ref="input"
        :placeholder="placeholder"
        @focus="focused = true"
        :disabled="isDisabled"
        v-model="inputValue"
      />
      <svg
        id="search"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="#ccccccb0"
      >
        <path
          d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z "
        />
      </svg>
      <svg
        v-if="inputValue.length"
        class="close"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        fill="#918c8c"
        @click="clearInput"
      >
        <path
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        />
      </svg>
    </label>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
export default {
  props: {
    isHover: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isAlert: {
      type: Boolean,
      default: false,
    },
    autoFocus: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
  },

  setup(props, { emit }) {
    const inputValue = ref(props.modelValue);
    const classes = computed(() => {
      return {
        hovered: props.isHover,
        disabled: props.isDisabled,
        alert: props.isAlert,
      };
    });

    const clearInput = () => {
      inputValue.value = "";
    };

    const input = ref();
    const focused = ref(false);

    const focus = () => {
      focused.value = true;
      input.value.focus();
    };

    onMounted(() => {
      if (props.autoFocus) {
        focus();
      }
    });
    return {
      input,
      classes,
      focus,
      focused,
      clearInput,
      inputValue,
    };
  },
};
</script>

<style lang="less" scoped>
.close {
  display: block;
  position: absolute;
  top: 50%;
  margin: -1rem 0;
  right: 1rem;
  width: 1.2rem;
  height: 2.2rem;
  cursor: pointer;
}
.input {
  display: flex;
  align-items: center;
  gap: 3rem;
  max-width: 32rem;
  margin-bottom: 2rem;
}
.label {
  position: relative;
  width: 100%;
  #search {
    position: absolute;
    top: 50%;
    margin: -1rem 0;
    left: 1rem;
    width: 1.6rem;
  }
  &-input {
    width: 100%;
    padding: 1.5rem 3.5rem;
    font-size: 1.6rem;
    border: 2px solid rgba(255, 255, 255, 0);
    border-radius: 0.6rem;

    &::placeholder {
      color: #ccccccb0;
    }
    &:focus-visible {
      outline: none;
    }
  }
  & input:hover {
    background: rgba(222, 214, 236, 0.479);
    &::placeholder {
      color: #918c8c;
    }
  }
  &:hover #search {
    fill: #918c8c;
  }
  & input:focus {
    border-color: rgba(194, 169, 238, 0.698);
    background: rgba(217, 205, 238, 0.479);
    &::placeholder {
      visibility: hidden;
    }

    & + #search {
      fill: #918c8c;
    }
  }
  &.hovered input {
    background: rgba(222, 214, 236, 0.479);
    &::placeholder {
      color: #918c8c;
    }
  }
  &.hovered #search {
    fill: #918c8c;
  }
  &.disabled {
    pointer-events: none;
  }

  &.alert input {
    background: rgba(235, 148, 163, 0.411);
    &:focus + #search {
      fill: rgb(225, 86, 61);
    }
  }
  &.alert #search {
    fill: rgb(225, 86, 61);
  }
}
</style>