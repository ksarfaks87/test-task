<template>
  <div class="info">
    <h2 class="info-title">{{ value }}</h2>
    <div class="info-content">
      <p class="info-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <my-button>Button name</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from "./Ui/MyButton.vue";
export default {
  components: { MyButton },
  props: {
    value: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  padding-top: 2rem;
  border-top: 1px solid #f2f2f4;
  &-title {
    padding: 0 0 2rem 2rem;
  }
  &-content {
    padding: 1.5rem;
    border-radius: 1rem;
    background: #f3eefc;
  }
  &-subtitle {
    color: #3b006e;
    font-weight: 600;
    padding-bottom: 2rem;
  }
}
</style>