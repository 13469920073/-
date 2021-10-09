<template>
  <div class="home">
    <h2>编辑推荐</h2>
    <Remd />
    <h2>最新音乐</h2>
    <ul>
      <li v-for="(item,index) in ages" :key="index" @click="bofang(item.id)">
        <div class="pio1">
          <div class="cop1">
            {{ item.name }}
            <span v-if="item.song.alias.length">{{ item.song.alias[0] }}</span>
          </div>
          <div class="cop2">
            <span v-for="p in item.song.artists" :key="p.id"
              >{{ p.name }} / </span
            ><span>{{ item.song.album.name }}</span>
          </div>
        </div>
        <div class="pio2 iconfont icon-bofanganniu"></div>
      </li>
    </ul>
    <div class="yun-ser">
      <div class="logo">
        <span class="iconfont icon-wangyiyunyinle"></span>&nbsp;<span
          >网<i></i>易<i></i>云<i></i>音<i></i>乐</span
        >
      </div>
      <div class="app-w">打开APP, 发现更多好音乐></div>
      <div class="wangyi">
        网易公司版权所有©1997-2021 杭州乐读科技有限公司运营
      </div>
    </div>
  </div>
</template>

<script>
import Remd from "./homes/Remds.vue";
export default {
  name: "Home",
  data() {
    return {
      ages: [],
      song: {},
    };
  },
  components: {
    Remd,
  },
  methods: {
    bofang(id) {
      this.$router.push({
        path: "/music",
        query: {
          id: id,
          shuzu:this.ages,
        },
      });
    },
  },
  mounted() {
    this.$api.getzuixin().then((res) => {
      this.ages = res.result;
    });
 
  },
};
</script>
<style scoped>
h2 {
  width: 100%;
  height: 20px;
  font-size: 17px;
  font-weight: 400;
  color: #333;
  line-height: 20px;
  border-left: 2px solid #dd001d;
  margin: 14px 0;
  padding-left: 9px;
}
ul li {
  height: 55.5px;
  display: flex;

  /* background-color: red; */
}
.pio1 {
  width: 87%;
  height: 55.5px;
  /* background-color: brown; */
  margin-left: 2%;
  padding: 5px 0;
  border-bottom: 1.5px solid rgb(245, 245, 245);
}
.pio1 .cop1 span {
  color: #888;
  font-size: 17px;
  /* padding-left: 4px; */
}
.pio1 .cop2 span {
  color: #888;
  font-size: 12px;
}
.pio2 {
  width: 11%;
  height: 55.5px;
  padding: 16px 10px;
  border-bottom: 1.5px solid rgb(245, 245, 245);
  text-align: center;
  font-size: 22px;
  color: rgb(170, 170, 170);
}
.pio1 .cop1 {
  width: 100%;
  height: 26px;
  /* background-color: salmon; */
  color: #333;
  font-size: 17px;
  line-height: 26px;
}
.pio1 .cop2 {
  width: 100%;
  height: 18px;
  color: #888;
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.yun-ser {
  width: 100%;
  height: 200px;
  /* background-color: #ccc; */
  padding-top: 60px;
  /* background-image: url(./../.); */
}
.logo {
  /* height: 44px; */
  /* background-color: salmon; */
  text-align: center;
  line-height: 44px;
  font-weight: 500;
  font-size: 30px;
}
.logo span {
  display: inline-block;
  height: 44px;
  font-size: 35px;
  line-height: 44px;
}
.logo span i {
  display: inline-block;
  height: 100%;
  width: 3px;
}
.logo .icon-wangyiyunyinle {
  display: inline-block;
  width: 44px;
  height: 44px;
  /* vertical-align: middle; */
  background-color: rgb(221, 0, 27);
  color: #fff;
  border-radius: 5px;
}
.app-w {
  width: 80%;
  height: 40px;
  border: 1px solid rgb(211, 58, 49);
  margin: 18px 10% 0;
  border-radius: 20px;
  color: #d33a31;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
}
.yun-ser .wangyi {
  display: inline-block;
  font-size: 10px;
  color: #888;
  height: 12px;
  text-align: center;
  width: 90%;
  margin-left: 5%;
  transform: scale(0.75);
}
</style>

