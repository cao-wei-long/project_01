<template>
    <div class="home" ref="homeRef">
      <!-- 标题 -->
      <home-nav-bar></home-nav-bar>
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>
      <!-- 位置信息-搜索 -->
      <home-search-box></home-search-box>
      <!-- 推荐类别 -->
      <home-categories></home-categories>
      <!-- 热门精选 -->
      <home-content></home-content>
      <!-- 顶部搜索框 -->
      <div class="top-search" v-if="isShowSearchBar">
        <top-search></top-search>
      </div>
    </div>
</template>

<script setup>
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import homeCategories from './cpns/home-categories.vue';
import homeContent from './cpns/home-content.vue';
import topSearch from '@/components/top-search/top-search.vue'
import { useHomeStore } from '@/stores/modules/home.js';
import { ref , watch } from 'vue';
import useScroll from '@/hooks/useScroll.js';
import { computed } from '@vue/reactivity';

  const homeStore = useHomeStore();
  // 发送网络请求
  homeStore.fetchHotSuggestsData()
  homeStore.fetchGetCategoriesData()
  homeStore.fetchGetHouselistData()

  const homeRef = ref()

  const{ scrollTop , isReachBottom } = useScroll(homeRef)
  
  watch(scrollTop,(newvalue) => {
    console.log(newvalue);
  })
  watch(isReachBottom,(newValue) => {
    if (newValue) {
      homeStore.fetchGetHouselistData().then(() => {
        isReachBottom.value = false
      })
    }
  })
  const isShowSearchBar = computed(() => {
    return scrollTop.value > 360
  })


</script>

<style lang="less" scoped>
.home{
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
  .banner{
    width: 100%;
    img{
      width: 100%;
    }
  }
  
}
  
</style>