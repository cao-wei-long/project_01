<template>
    <div class="content-v3">
        <div class="inner">
            <img :src="itemData.image.url" alt="">
        </div>
        <div class="information">
            <div class="location">
                <img src="@/assets/img/home/location.png" alt="">
                <span>{{ itemData.location }}</span>
            </div>
            <div class="houseName">
                {{ itemData.houseName }}
            </div>
            <div class="summaryText">
                {{ itemData.summaryText }}
            </div>
            <div class="price">
                <span class="finalPrice">￥ {{ itemData.finalPrice }}</span>
                <span class="productPrice"><del> ￥{{ itemData.productPrice }}</del></span>
                <span class="priceTipBadge"> {{ itemData.priceTipBadge.text }} </span>
            </div>
        </div>         
    </div>
</template>

<script setup>
    const props = defineProps({
        itemData:{
            type:Object,
            default:()=>{}
        }
    })
</script>

<style lang="less" scoped>
.content-v3{
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
    }
    .information{
        padding: 5px;
        .location{
            display: flex;
            align-items: center;
            img{
                width: 13px;
            }
            span{
                font-size: 12px;
                color: #666;
            }
        }
        .houseName{
            margin: 5px 0;
            font-size: 14px;
            font-weight: 350;
            // 设置行数为2 超出部分字体替换为...
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .summaryText{
            font-size: 12px;
            color: #666;
        }
        .price{
            margin: 8px 0;
            display: flex;
            .finalPrice{
                color: #ff9645;
                padding-right: 5px;
            }
            .productPrice{
                color: #999;
                font-size: 12px;
                padding-right: 5px;
            }
            .priceTipBadge{
                color: #fff;
                background-image: linear-gradient(270deg, #f66, #ff9f9f);
                font-size: 12px;
                padding: 0 5px;
                line-height: 16px;
                border-radius: 8px;
            }
        }
    }
    
   
    
}
</style>