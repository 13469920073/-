<template>
  <div>
    <ul>
      <li v-for="(item, index) in val" :key="index" @click="jiazai(item.id)">
        <div class="pio1">{{ (index += 1) }}</div>
        <div class="pio2">
          <div class="cop1">{{ item.name }}</div>
          <div class="cop2">{{ item.ar[0].name }}</div>
        </div>
        <div class="pio3 iconfont icon-bofanganniu"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "zhuanji",
  data() {
    return {
      key: {},
      val: [],
    };
  },
  methods: {
    jiazai(value) {
      this.$router.push({
        path: "/music",
        query: {
          id: value,
          shuzu:this.val
        },
      });
    },
  },
  mounted() {
    this.key = this.$route.query;
    this.$api
      .getsousuo({
        keywords: this.key.name,
        limit: 10,
      })
      .then((res) => {
        this.val = res.result.songs;
        console.log(res.result.songs)
      });
  },
};
</script>

<style scoped>
ul li {
  display: flex;
  /* height: 55.5px; */
}
.pio1 {
  width: 11%;
  height: 55.5px;
  text-align: center;
  line-height: 55.5px;
  color: #999;
}
.pio2 {
  width: 78%;
  height: 55.5px;
  /* background-color: brown; */
  padding: 5px 0;
  border-bottom: 1.5px solid rgb(245, 245, 245);
}
.pio3 {
  width: 11%;
  height: 55.5px;
  padding: 16px 10px;
  border-bottom: 1.5px solid rgb(245, 245, 245);
  text-align: center;
  font-size: 22px;
  color: rgb(170, 170, 170);
}
.pio2 .cop1 {
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
.pio2 .cop2 {
  width: 100%;
  height: 18px;
  color: #888;
  font-size: 12px;
  line-height: 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>