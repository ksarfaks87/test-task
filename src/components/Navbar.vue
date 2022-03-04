<template>
  <div class="container">
    <div class="wrapper">
      <div class="navbar">
        <h1 @click="$router.push('/')">Test</h1>
        <div class="btn-group">
          <p @click="$router.push('/select')">Select</p>
          <p @click="$router.push('/input')">Input</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  background: rgba(56, 186, 238, 0.822);
}
.navbar {
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: 5rem;
  color: #fff;
  & > h1 {
    cursor: pointer;
  }
}
.btn-group {
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  & > p {
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>