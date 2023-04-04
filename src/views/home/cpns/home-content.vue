<template>
    <div class="home-content">
      <h2>热门精选</h2>
      <div class="list">
        <template v-for="item in houselist" :key="item.data.houseId">
            <house-item-v3 v-if="item.discoveryContentType == 3" 
            :item-data="item.data"
            ></house-item-v3>

            <house-item-v9 v-if="item.discoveryContentType == 9"
            :item-data="item.data"
            ></house-item-v9>   
        </template>
      </div>
      
    </div>
</template>

<script setup>
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import { useHomeStore } from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
    const homeStore = useHomeStore()
    const { houselist } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.home-content{ 
    margin-top: 10px;
    padding: 0 10px;   
    h2{
      font-size: 22px;
      margin-left: 5px;
    }
    .list{
      display: flex;
      flex-wrap: wrap;
    }
}
</style>