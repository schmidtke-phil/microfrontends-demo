<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: mf-vue-1</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
    <Test />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Test } from './test.vue'

  export default defineComponent({});
</script>
