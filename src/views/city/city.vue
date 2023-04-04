<template>
    <div class="city">
        <!-- 搜索 -->
        <div class="search">
            <form action="/">
                <van-search
                    v-model="value"
                    show-action
                    placeholder="城市/区域/位置"
                    @search="onSearch"
                    @cancel="onCancel"
                    shape="round"
                />
            </form>
        </div>

        <!-- tab栏切换 -->
        <div class="tab">
            <van-tabs v-model:active="active">
                <template v-for="(value,key,index) in cityData" :key="key">
                    <van-tab :title="value.title" :name="index">
                        <van-index-bar :index-list="index ? cityGroupOverSeaListIndexList : cityGroupListIndexList">
                            <van-index-anchor index="#">热门</van-index-anchor>
                            <div class="hotCity">
                                <div v-for="item in value.hotCities"  class="theCity" @click="cityClick(item.cityName)">
                                    {{ item.cityName }}
                                </div>
                            </div>
                            <template v-for="item in value.cities">
                                <van-index-anchor :index="item.group">{{ item.group }}</van-index-anchor>
                                <template v-for="cityName in item.cities">
                                    <van-cell :title="cityName.cityName" @click="cityClick(cityName.cityName)"/>
                                </template>
                            </template>
                            
                            
                        </van-index-bar>

                    </van-tab>
                </template>
            </van-tabs>
        </div>
    </div>
</template>

<script setup>
import { ref , computed} from 'vue';
import { Toast } from 'vant';
import { useRouter } from 'vue-router';
import { useCityStore } from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia';

    const router = useRouter();
    const value = ref('');
    const onSearch = (val) => Toast(val);
    const onCancel = () => {
        router.go(-1)
    };

    const active = ref(0);

    // const activeName = ref('a');

    // 获取city数据
    const CityStore = useCityStore();
    CityStore.getCityData()

    const {cityData ,cityGroupList ,cityGroupOverSeaList} = storeToRefs(CityStore)

    // console.log(cityData.value);
    // 获取侧边字母导航列表
    const cityGroupListIndexList = computed(() => {
        const list = ['#'];
        for (let index = 0; index < cityGroupList.value.length; index++) {
            const element = cityGroupList.value[index].group;
            list.push(element)
            // console.log(cityData.cityGroup.cities);
        } 
        return list
    })

    const cityGroupOverSeaListIndexList = computed(() => {
        const list = ['#'];
        for (let index = 0; index < cityGroupOverSeaList.value.length; index++) {
            const element = cityGroupOverSeaList.value[index].group;
            list.push(element)
            // console.log(cityData.cityGroup.cities);
        } 
        return list
    })

    const cityClick = (value) => {
        CityStore.currentCity = value
        router.go(-1)
    }

    // console.log(cityGroupList.value);
</script>

<style lang="less" scoped>
.city{
    .tab{
        .hotCity{
            display: flex;
            flex-wrap: wrap;
            padding: 10px 10px;
            .theCity{
                width: 20%;
                margin: 5px 5px 5px 10px;
                padding: 8px 0;
                border-radius: 20px;
                text-align: center;
                background-color: #fff4ec;
                
            }
        }
    }
}
</style>