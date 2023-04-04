<template>
    <div class="search-box bottom-gray-line">
        <!-- 位置信息 -->
      <div class="location bottom-gray-line">
        <div class="city" @click="cityClick()">
            {{ currentCity }}
        </div>
        <div class="position" >
            <span>我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
      </div>

      <!-- 日期范围 -->
      <div class="bottom-gray-line date"  @click="show = true">
        <div class="startDate">
            <span class="fontStyle">入住</span>
            <span>{{ startDateStr }}</span>
        </div>
        <div class="commonDate">
            <span class="fontStyle">共 {{ stayCount }} 晚</span>
        </div>
        <div class="endDate">
            <span class="fontStyle">离店</span>
            <span>{{ endDateStr }}</span>
        </div>
      </div>
      <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />

      <!-- 价格/人数 -->
      <div class="price-counter bottom-gray-line">
        <div class="price">价格不限</div>
        <div class="counter">人数不限</div>
      </div>
      <!-- 关键字/位置/民宿 -->
      <div class="keyWord bottom-gray-line">关键字/位置/民宿名</div>

      <!-- 热门建议 -->
      <div class="hot-suggests">
        <template v-for="item in hotSuggests">
            <div>
                {{ item.tagText.text }}
            </div>
        </template>
      </div>
    </div>

    <!-- 开始搜索 -->
    <div class="search-btn">
        <div class="btn">开始搜索</div>
    </div>

    
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useMainStore } from '@/stores/modules/main.js'
import { computed } from '@vue/reactivity';
import { useHomeStore } from "@/stores/modules/home.js"
import dayjs from 'dayjs'
    const router = useRouter()
    const cityClick = () =>{
        router.push("./city")
    }
    
    const cityStore = useCityStore();
    const { currentCity } = storeToRefs(cityStore)

// 日期范围
    const show = ref(false);
    const mainStorg = useMainStore();
    const { startDate,endDate } = storeToRefs(mainStorg)
    // 入住时间
    const startDateStr = computed(() => {
        return dayjs(startDate.value).format('MM月DD日')
    })
    // 离店时间
    const endDateStr = computed(() => {
        return dayjs(endDate.value).format('MM月DD日')
    })
    // 共计多少晚
    const stayCount = computed(() => {
        return (endDate.value - startDate.value)/1000/60/60/24
    })

    const onConfirm = (values) => {
      const [start, end] = values;
      show.value = false;
      mainStorg.startDate = start;
      mainStorg.endDate = end;
    };

    // 获取热门建议
    const homeStore = useHomeStore()
    // homeStore.fetchHotSuggestsData()
    const {hotSuggests} = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.location{
    height: 45px;
    display: flex;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
    .city{
        flex: 1;
    }
    .position{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 18px;
        }
        span{
            font-size: 12px;
            color: #666;
        }
    }
}
// 日期
.date{
    display: flex;
    justify-content: center;
    padding: 0 19px;
    .commonDate{
        height: 45px;
        line-height: 45px;
        flex: 1;
        text-align: center;
        .fontStyle{
            font-size: 12px;
            color: #666;
        }
    }
    .startDate,.endDate{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .fontStyle{
            font-size: 12px;
            color: #666;
        }
    }
    .endDate{
        padding-right: 35px;
    }
}
// 价格/人数
.price-counter{
    display: flex;
    margin: 0px 20px;
    color: #666;
    font-size: 14px;
    padding: 10px 0;
    .price{
        flex: 1;
    }
    .counter{
        padding-right: 38px;
    }
}
// 关键字/位置/民宿名
.keyWord{
    padding: 10px 20px;
    color: #666;
    font-size: 14px;
}
// 热门建议
.hot-suggests{
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px;
    div{
        background-color: rgb(241, 243, 245);
        padding: 3px 8px;
        margin: 5px 5px;
        border-radius: 8px;
        font-size: 12px;
        color: rgb(63, 73, 84);
    }
}
// 开始搜索
.search-btn{
    .btn{
        width: 80%;
        text-align: center;
        background-image: var(--theme-linear-gradient);
        margin: 0 auto;
        color: aliceblue;
        font-size: 20px;
        padding: 8px 0;
        border-radius: 20px;
    }
}
</style>