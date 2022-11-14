<template>
  <div class="test-body">
    <header>this is the a awesome header text</header>
    <main>
      <TestComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est facere recusandae ab non deserunt illum
        fugiat ipsam, dolor iste velit, eaque totam quae dolores incidunt rem molestiae enim. Rerum?
      </TestComponent>
    </main>
  </div>
</template>

<script setup lang="ts">
import TestComponent from '@src/components/test-component'
</script>

<style lang="scss">
.test-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
