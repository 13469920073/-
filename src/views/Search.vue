<template>
  <div>
    <div class="beijing">
      <div class="ji">
        <h3>最佳匹配</h3>
        <div
          class="top-set"
          v-for="(item, index) in geshou"
          :key="index"
          @click="dianji(item.name)"
        >
          <img :src="item.img1v1Url" alt="" />
          <h4>
            歌手: <span>{{ item.name }}</span>
            <span> {{ item.alias[0] }} </span>
          </h4>
          <span class="iconfont icon-youkuohao"></span>
        </div>
      </div>
      <div class="ding" @click="jiazai" v-if="nan">点击加载更多</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      nan: true,
      age: 8,
      geshou: [],
    };
  },
  methods: {
    jiazai() {
      this.nan = false;
      this.age += 8;
      this.nan = true;
      this.$api
        .getjingpin({
          limit: this.age,
        })
        .then((res) => {
          this.geshou = res.artists;
        });
    },
    dianji(value) {
      this.$router.push({
        path: "/zhuan",
        query: {
          name: value,
        },
      });
    },
  },
  mounted() {
    this.$api
      .getjingpin({
        limit: this.age,
      })
      .then((res) => {
        // console.log(res.artists);
        this.geshou = res.artists;
      });
  },
};
</script>

<style scoped>
.ji h3 {
  width: 100%;
  height: 16px;
  font-size: 12px;
  color: #666;
  font-weight: 400;
  margin: 5px 10px;
}
.top-set {
  width: 100%;
  height: 66px;
  padding: 8px 10px 8px 0;
  margin: 0 10px;
  display: flex;
  align-items: center;
}
.top-set img {
  display: inline-block;
  vertical-align: middle;
  width: 50px;
  height: 50px;
}
.top-set h4 {
  display: inline-block;
  font-weight: 400;
  font-size: 17px;
  width: 264px;
  height: 30px;
  color: #333;
  margin: 0 10px;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.top-set h4 span:nth-child(1) {
  color: #507daf;
}
.top-set .iconfont {
  display: inline-block;
  width: 31px;
  color: rgb(155, 155, 155);
}
.ding {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 15px;
  font-size: 12px;
  text-align: center;
  line-height: 15px;
  color: #666;
}
</style>