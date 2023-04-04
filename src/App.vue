<template>
  <div class="app">
      <router-view></router-view>
      <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>

<script setup>
import { ref ,watch} from "vue";
import { useRoute } from "vue-router";
import tabBar from './components/tab-bar/tab-bar.vue';

  const route = useRoute();
  
</script>


<style scoped>

</style>
