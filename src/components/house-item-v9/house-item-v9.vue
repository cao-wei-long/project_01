<template>
    <div class="content-v9">
        <div class="inner">
            <img :src="itemData.image.url" alt="">
            <div class="summaryText">{{ itemData.summaryText }}</div>
            <div class="houseName">{{ itemData.houseName }}</div>
            <!-- 评分 -->
            <div class="star">
                <van-rate v-model="itemScore" allow-half readonly size="15px" color="#fff" />
            </div>
            <!-- 价格 -->
            <div class="price">
                ￥{{ itemData.finalPrice }}
            </div>
            
        </div> 
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
    const props = defineProps({
        itemData:{
            type:Object,
            default:()=>{}
        }
    })
    const itemScore = computed(() => {
        return Number(props.itemData.commentScore)
    })
</script>

<style lang="less" scoped>
.content-v9{
    width: 50%;
    padding: 0 5px;
    margin-top: 15px;
    box-sizing:border-box;
    .inner{             
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        img{
            width: 100%;
        }
        .summaryText{
            position: absolute;
            top: 138px;
            color: aliceblue;
            left: 15px;
            font-size: 12px;
        }
        .houseName{
            position: absolute;
            top: 156px;
            left: 15px;
            color: aliceblue;
            font-size: 14px;
            line-height: 18px;
            // 设置行数为2 超出部分字体替换为...
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .star{
            position: absolute;
            bottom: 10px;
            padding-left: 10px;
        }
        .price{
            position: absolute;
            bottom: 10px;
            right: 20px;
            color: #fff;
        }
    }
}
</style>