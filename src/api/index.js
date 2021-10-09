import { get } from '../utils/request'

const api = {
  getlist(params) {
    return get("/api/personalized", params)
  },
  getgedan(params) {
    return get("/api/playlist/detail", params)
  },
  getzuixin(params){
    return get("/api/personalized/newsong",params)
  },
  getgequ(params){
    return get('/api/song/url',params)
  },
  getsousuo(params){
    return get('/api/cloudsearch',params)
  },
  getliebiao(params){
    return get('/api/search/hot',params)
  },
  getxiangqing(params){
    return get('/api/artist/desc',params)
  },
  getjingpin(params){
    return get('/api/top/artists',params)
  },
  getxiangqing(params){
    return get('/api/song/detail',params)
  },
  getzhaopian(params){
    return get('/api/cloudsearch',params)
  },
  gethua(params){
    return get('/api/song/detail',params)
  },
  getgeci(params){
    return get('/api/lyric',params)
  }
 
}
export default api