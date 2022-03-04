<template>
  <div class="content">
    <label class="radio" @click="$emit('getTitle', item.title)">
      <input :checked="active" class="radio-input" name="title" type="radio" />

      <span class="radio-checked"></span>
      {{ item.title }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    active: Boolean,
  },
};
</script>

<style lang="less" scoped>
.content {
  padding-bottom: 0.5rem;
}
.radio {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 0.6rem;
  padding: 1rem 2rem 1rem 5rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  &:hover {
    background: #f2f0f5;
  }
  &-input {
    position: absolute;
    appearance: none;
    -webkit-appearance: none;
  }
  &-checked {
    display: block;
    width: 2.4rem;
    height: 2.4rem;

    border: 1px solid #aba5b4;
    border-radius: 0.5rem;
    position: absolute;
    top: 0.7rem;
    left: 1.8rem;
    z-index: 1;
    transition: all 0.3s ease;
    &::after {
      content: "";
      display: block;
      width: 1.4rem;
      height: 1.4rem;
      background: url("../../img/check.svg");
      background-repeat: no-repeat;
      position: absolute;
      opacity: 0;
      top: 0.5rem;
      left: 0.5rem;
      z-index: 2;
      transition: all 0.3s ease;
    }
  }
}
.radio-input:checked + .radio-checked {
  background: #8831d8;
}
.radio-input:checked + .radio-checked::after {
  opacity: 1;
}
</style>