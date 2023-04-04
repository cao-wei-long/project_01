import { defineStore } from "pinia";
import axios from "axios";

export const useCityStore = defineStore('city',{
    state:() => {
        return {
            cityData:{},
            cityGroupList:[],
            cityGroupOverSeaList:[],
            currentCity:'广州'
        }
    },
    getters:{

    },
    actions:{
        async getCityData(){
            await axios.get('http://codercba.com:1888/api/city/all').then(res => {
                this.cityData = res.data.data;
                this.cityGroupList = res.data.data.cityGroup.cities;
                this.cityGroupOverSeaList = res.data.data.cityGroupOverSea.cities;
            }).catch(err => {
                console.log(err);
            })
        }
    }
})
