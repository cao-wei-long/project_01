<template>
    <div class="tabbar">
        <van-tabbar v-model="active" active-color="#ff9854" route>
            <van-tabbar-item to="/home">
                <span>首页</span>
                <template #icon="props">
                <img src="@/assets/img/tabbar/tab_home_active.png" alt="" v-if="props.active">
                <img src="@/assets/img/tabbar/tab_home.png" alt="" v-if="!props.active">
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/favor">
                <span>收藏</span>
                <template #icon="props">
                <img src="@/assets/img/tabbar/tab_favor_active.png" alt="" v-if="props.active">
                <img src="@/assets/img/tabbar/tab_favor.png" alt="" v-if="!props.active">
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/order">
                <span>订单</span>
                <template #icon="props">
                <img src="@/assets/img/tabbar/tab_order_active.png" alt="" v-if="props.active">
                <img src="@/assets/img/tabbar/tab_order.png" alt="" v-if="!props.active">
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/message">
                <span>消息</span>
                <template #icon="props">
                <img src="@/assets/img/tabbar/tab_message.png" alt="" v-if="props.active">
                <img src="@/assets/img/tabbar/tab_message.png" alt="" v-if="!props.active">
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref ,watch} from "vue";
    const active = ref(0);
</script>

<style lang="less" scoped>

</style>