<template>
  <div class="wrapper">
    <h1>Страница с инпутом</h1>
    <my-input />
    <my-input :isHover="true" />
    <my-input v-model="value" />
    <my-input v-model="value" :isAlert="true" />
    <my-input :isDisabled="true" />
    <my-input :autoFocus="true" />
  </div>
</template>

<script>
import MyInput from "@/components/Ui/MyInput.vue";
export default {
  components: { MyInput },
  // mounted() {
  //   this.$emit("focus", this.$el);
  // },
  data() {
    return {
      value: "Lorem ipsum dolor sit",
    };
  },
};
</script>

<style lang="less" scoped>
</style>