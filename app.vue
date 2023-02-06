<script setup>
  // importaciones de components 
  import Layout from './layout/Layout.vue';

  import { onMounted } from 'vue'
  import { 
      initAccordions, 
      initCarousels, 
      initCollapses, 
      initDials, 
      initDismisses, 
      initDrawers, 
      initDropdowns, 
      initModals, 
      initPopovers, 
      initTabs, 
      initTooltips } from 'flowbite'

  // initialize components based on data attribute selectors
  onMounted(() => {
      initAccordions();
      initCarousels();
      initCollapses();
      initDials();
      initDismisses();
      initDrawers();
      initDropdowns();
      initModals();
      initPopovers();
      initTabs();
      initTooltips();
  })
</script>
<template>
  <!-- Layout-start -->
    <Layout/>
  <!-- Layout-end -->
</template>

<style>
</style>