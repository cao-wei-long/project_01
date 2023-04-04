<template>
    <div class="top-search">
      <div class="search">
        <div class="date">
            <div class="start">住 <span> {{ startDateStr }}</span></div>
            <div class="end">离 <span > {{ endDateStr }}</span></div>
        </div>
        <div class="keywords"> 
            <input type="text" placeholder="关键字/位置/民宿" value="lalala">
        </div>
        <div class="right">
            <van-icon name="search" size="25"/>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/stores/modules/main.js'
import { storeToRefs } from 'pinia';
import dayjs from 'dayjs'
import { computed } from '@vue/reactivity';

const mainStore = useMainStore()
const { startDate,endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => {
    return dayjs(startDate.value).format('MM.DD')
})
// 离店时间
const endDateStr = computed(() => {
    return dayjs(endDate.value).format('MM.DD')
})
    
</script>

<style lang="less" scoped>
.top-search{
    width: 100%;
    position: fixed;
    top: 0;
    height: 70px;
    background-color: #fff;
    padding: 15px 20px 10px;
    box-sizing: border-box;
    
    .search{
        height: 100%;
        background-color: #f2f4f6;
        display: flex;
        border-radius: 5px;
        .date{
            padding-left: 10px;
            border-right:2px solid #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            padding-right: 8px;
            div{
                font-size: 12px;
                color: #999;
                span{
                    color: black;
                }
            }
            .start{
                margin-bottom: 1px;
            }
            .end::after{
                    content: " ";
                    width: 0;
                    height: 0;
                    border: 4px solid #666;
                    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
                    -webkit-border-radius: 3px;
                    border-radius: 3px;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                    position: absolute;
                    bottom: 8px;
                    right: -2px;
                }
        }
        .keywords{
            display: flex;
            flex: 1;
            padding-left: 5px;
            input{
                border:0px;
                outline:none;
                background-color: rgba(0, 0, 0, 0);
                font-size: 12px;
                color: #999;
            }
        }
        .right{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 10px;
        }
    }
  }
</style>