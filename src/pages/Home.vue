<template>
  <div class="wrapper">
    <h1>Главная страница задания</h1>
    <h2 @click="changeVisible">Изменить</h2>
    <h1 v-if="isVisible">Видно</h1>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const isVisible = ref(false);

    const changeVisible = () => {
      console.log(isVisible.value);

      isVisible.value = !isVisible.value;
      console.log(isVisible.value);
    };
    return { isVisible, changeVisible };
  },
};
</script>

<style lang="less" scoped>
</style>