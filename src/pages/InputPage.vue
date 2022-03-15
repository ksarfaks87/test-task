<template>
  <div class="wrapper">
    <h1>Страница с инпутом</h1>

    <my-input v-model="value" />
    <my-input v-model="value" :isHover="true" />
    <my-input v-model="startValue" />
    <my-input v-model="startValue" :isAlert="true" />
    <my-input v-model="value" :isDisabled="true" />
    <my-input v-model="value" :autoFocus="true" />
  </div>
</template>

<script>
import MyInput from "@/components/Ui/MyInput.vue";
export default {
  components: { MyInput },
  setup() {
    const value = "";
    const startValue = "Lorem ipsum";
    return { value, startValue };
  },
};
</script>

<style lang="less" scoped>
</style>