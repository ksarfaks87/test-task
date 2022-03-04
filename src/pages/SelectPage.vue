<template>
  <div class="wrapper">
    <h1>Страница с Select</h1>
    <my-select :hasError="true" />
    <my-select :type="activeValue" />
    <my-select :isDisabled="true" :type="activeValue" />
    <my-select :autoFocus="true" />
  </div>
</template>

<script>
import MySelect from "../components/Ui/MySelect.vue";
export default {
  components: { MySelect },

  setup() {
    const activeValue = "Lorem ipsum";
    return { activeValue };
  },
};
</script>

<style lang="less" scoped>
.some {
  text-align: center;
  transition: all 0.3s ease;
}
</style>