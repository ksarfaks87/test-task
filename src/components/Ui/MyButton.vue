<template>
  <button class="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#fff">
      <path
        d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
      />
    </svg>
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.button {
  display: flex;
  align-items: center;
  min-height: 3.5rem;
  padding: 0 1.8rem;
  gap: 1.1rem;
  border: 0.1rem solid transparent;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: 0.8rem;
  color: #fff;
  background: #8731d8bb;
  cursor: pointer;
  transition: all 0.3s ease;
  svg {
    width: 1.8rem;
    height: 1.8rem;
    transition: all 0.3s ease;
  }
  &:hover {
    box-shadow: 0 0 0.5rem #8731d8;
    svg {
      transform: rotate(90deg);
    }
  }
}
</style>