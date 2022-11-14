<template>
  <div class="my-component">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.my-component {
  display: flex;
  width: 50%;
  padding: 1rem;
  margin-inline: auto;
  color: #ffffff;
  background-color: blue;
}
</style>
