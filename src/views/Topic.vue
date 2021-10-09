<template>
  <div class="rp-t">
    <div class="ret">
      <img :src="playlist.coverImgUrl" alt="" class="pian" />
      <span
        ><i class="iconfont icon-erji"></i>{{ we(playlist.playCount) }}万</span
      >
      <p>歌单</p>
      <div class="we">
        <img :src="playlist.coverImgUrl" alt="" />
        <h2>{{ playlist.name }}</h2>
        <div class="fg">
          <img :src="creator.avatarUrl" alt="" class="qw" />
          {{ creator.nickname }}
        </div>
      </div>
    </div>
    <h3>歌单列表</h3>
    <ul >
      <li v-for="(item,index) in tracks" :key="index" @click="bofang(item.id)">
        <div class="pio1">{{index+1}}</div>
        <div class="pio2">
          <div class="cop1">{{item.name}}</div>
          <div class="cop2">{{item.ar[0].name}}</div>
        </div>
        <div class="pio3 iconfont icon-bofanganniu" ></div>
      </li>
    </ul>
    <p class="set-r">查看更多歌曲,请下载客户端</p>
    <div class="gu">
     <h4><span class="iconfont icon-wangyiyunyinleclick" style="font-size:20px;"></span> 收藏歌单</h4>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Topic",
  data() {
    return {
      ges: {},
      playlist: {},
      creator: {},
      tracks:[]
    };
  },
  methods: {
    we(value) {
      return (value / 10000).toFixed(1);
    },
    bofang(value){
      this.$router.push({
        path:'/music',
        query:{
          id:value,
          shuzu:this.tracks
        }
      })
    }
   
  },

  mounted() {
    this.ges = this.$route.query;

    this.$api
      .getgedan({
        id: this.ges.id,
        s:10,
      })
      .then((res) => {
        this.set = res;
        // console.log(res);
        this.playlist = res.playlist;
        this.creator = res.playlist.creator;
        this.tracks=res.playlist.tracks;
        // console.log(res.playlist.tracks)
      });
  },
};
</script>

<style scoped>
.rp-t{
  margin-bottom:54px ;
}
.ret {
  position: relative;
  width: 100%;
  height: 186px;
  overflow: hidden;
  
}
.ret .pian {
  position: absolute;
  top: -190px;
  left: -100px;
  width: 150%;
  filter: blur(25px);
}
.ret span {
  position: absolute;
  top: 25px;
  right: 230px;
  font-size: 12px;
  color: #fff;
  z-index: 999;
}
.ret p {
  position: absolute;
  top: 35px;
  left: 19px;
  width: 40px;
  height: 17px;
  line-height: 17px;
  text-align: center;
  font-size: 9px;
  color: #fff;
  background-color: rgba(217, 48, 48, 0.8);
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
  z-index: 999;
}
.ret .we {
  position: absolute;
  top: 25px;
  left: 5%;
  width: 92%;
  height: 126px;
}
.ret .we img {
  float: left;
  height: 100%;
}
.ret .we h2 {
  float: right;
  width: 208px;
  height: 45px;
  /* background-color: #333; */
  color: #fefefe;
  font-size: 17px;
  font-weight: 400;
  padding: 1px 0 0;
}
.ret .we .fg {
  float: right;
  width: 208px;
  height: 30px;
  /* background-color: rosybrown; */
  font-size: 14px;
  line-height: 30px;
  color: #ffffffb3;
}
.ret .we .fg .qw {
  height: 100%;
  border-radius: 50%;
}
h3 {
  width: 100%;
  height: 23px;
  /* margin-left: 3%; */
  color: #666666;
  font-size: 12px;
  background-color: #eeeff0;
  font-weight: 400;
  line-height: 23px;
  padding:0 10px ;
}
ul li{
  display: flex;
   /* height: 55.5px; */
}
.pio1{
  width: 11%;
  height: 55.5px;
  text-align: center;
  line-height: 55.5px;
  color: #999;
}
.pio2{
  width: 78%;
 height: 55.5px;
  /* background-color: brown; */
  padding: 5px 0;
  border-bottom:1.5px solid rgb(245, 245, 245) ;
}
.pio3{
  width: 11%;
  height: 55.5px;
  padding: 16px 10px;
  border-bottom:1.5px solid rgb(245, 245, 245) ;
  text-align: center;
  font-size: 22px;
  color: rgb(170, 170, 170);
}
.pio2 .cop1{
  width: 100%;
  height: 26px;
  /* background-color: salmon; */
  color: #333;
  font-size: 17px;
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

}
.pio2 .cop2{
  width: 100%;
  height: 18px;
  color: #888;
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
 .set-r{
  /* display: block; */
  font-size: 14px;
  color: #999;
  height: 21px;
  text-align: center;
  line-height: 21px;
}
.gu{
  width: 100%;
  height: 54px;
  position: fixed;
  bottom: 0;
 background-color: #fff;
  padding: 7px 35px;
}
.gu h4{
  /* width: 100%; */
  height: 100%;
   background-color: #ff3a3a;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
</style>

