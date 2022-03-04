<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style lang="less" >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  font-family: Inter, sans-serif;
}
.wrapper {
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem 1rem;
}
h1 {
  font-size: 3.6rem;
}
h2 {
  font-size: 2.4rem;
}
a {
  font-size: 1.6rem;
}
</style>