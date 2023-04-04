import { defineStore } from "pinia";
import { getHomeHotSuggests , getCategories , getHouselist } from "@/service/index.js"

export const useHomeStore = defineStore('home',{
    state:() => {
        return {
            hotSuggests:[],
            categories:[],
            
            currentPage:1,
            houselist:[]
        }
    },
    actions:{
        async fetchHotSuggestsData(){
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        },
        async fetchGetCategoriesData(){
            const res = await getCategories()
            this.categories = res.data
        },
        async fetchGetHouselistData(){
            const res = await getHouselist(this.currentPage)
            this.houselist.push(...res.data)
            this.currentPage++
        }
    }
})


