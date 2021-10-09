<template>
  <div>
    <ul>
      <li v-for="(item, index) in shuju" :key="index" @click="ma(item.id)">
        <a href="#">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
          <span><i class="iconfont icon-erji"></i>{{ zi(item.playCount) }}万</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Remd",
  data() {
    return {
      shuju: [],
    };
  },
  methods: {
    zi(i) {
      return (i/10000).toFixed(1)
    },
    ma(value){
      this.$router.push({
        path:'/topic',
        query:{
        id:value,
        }
      })
    }
  },
  mounted() {
    this.$api
      .getlist({
        limit: 6,
      })
      .then((res) => {
        // console.log(res.result);
        this.shuju = res.result;
      });
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul li {
  width: 33%;
  float: left;
}
ul li img {
  width: 100%;
}
ul li a {
  position: relative;
}
ul li a p {
  color: #333;
  font-size: 13px;
  margin: 0px 1px 6px 1px;
}
ul li a span {
  position: absolute;
  top: -105px;
  right: 5px;
  color: #fff;
  font-size: 12px;
  z-index: 999;
}
</style>