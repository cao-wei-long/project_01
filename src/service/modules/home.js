import HYRequest from '../request/index.js'

export const getHomeHotSuggests = function(){
    return HYRequest.get({
        url:'home/hotSuggests'
    })
}

export const getCategories = function(){
  return HYRequest.get({
    url:'home/categories'
  })
}

export const getHouselist = function(currentPage){
  return HYRequest.get({
    url:'home/houselist',
    params:{
      page : currentPage
    }
  })
}
  







