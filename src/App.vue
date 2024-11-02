<template>
  <div class="test-body">
    <header>this is the a awesome header text</header>
    <main style="display: inline; padding: 0">
      <TestComponent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est facere recusandae ab non deserunt illum
        fugiat ipsam, dolor iste velit, eaque totam quae dolores incidunt rem molestiae enim. Rerum?
      </TestComponent>
    </main>
  </div>
</template>

<script setup lang="ts">
import TestComponent from '@src/components/test-component'

defineProps<{
  foo: string
  bar?: number
}>()
</script>

<style lang="scss">
.test-body {
  display: flex;
  padding: 0;
}
</style>
