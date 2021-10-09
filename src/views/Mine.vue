<template>
  <div>
    <div class="int">
      <div class="sou">
        <form>
          <span
            class="iconfont icon-search"
            style="line-height: 30px; text-align: center"
          ></span
          ><input
            type="text"
            placeholder="搜索歌曲、歌手、专辑"
            @keyup.enter="search"
            v-model="keyzhi"
          />
        </form>
      </div>
    </div>
    <div v-if="over">
      <div class="resou">
        <h3 style="font-weight: 400">热门搜索</h3>
        <ul>
          <li
            v-for="item in shuzu"
            :key="item.id"
            @click="chuanzhi(item.first)"
          >
            {{ item.first }}
          </li>
        </ul>
      </div>
      <ul class="duqu" v-if="bendi.length > 0">
        <li v-for="(item, index) in bendi" :key="index">
          <span class="iconfont icon-beifendingshiqi-02"></span>
          <div class="ge" @click="chuanzhi(item)">
            {{ item }}
          </div>
          <p @click="jian(index)"></p>
        </li>
      </ul>
    </div>
    <div>
      <h3 class="h-re">最佳匹配</h3>
      <ul>
        <li v-for="item in gequ" :key="item.id" @click="chuansong(item.id)">
          <div class="pio1">
            <div class="cop1">
              <span>{{ item.name }}</span>
            </div>
            <div class="cop2">
              <span></span><span>{{ item.ar[0].name }}</span
              ><span>-{{ item.al.name }}</span>
            </div>
          </div>
          <div class="pio2 iconfont icon-bofanganniu"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    return {
      gequ: [],
      shuzu: [],
      bendi: [],
      over: true,
      keyzhi: "",
    };
  },
  methods: {
    search(e) {
      this.over = false;
      this.bendi.push(e.target.value);
      localStorage.setItem("oldMUI", JSON.stringify(this.bendi));
      this.bendi = JSON.parse(localStorage.getItem("oldMUI"));
      this.$api
        .getsousuo({
          keywords: e.target.value,
          limit: 10,
        })
        .then((res) => {
          
          this.gequ = res.result.songs;
          console.log(res.result.songs)

        });
    },
    jian(value) {
      console.log(value);
      this.bendi.splice(value, 1);
      localStorage.setItem("oldMUI", JSON.stringify(this.bendi));
      this.bendi = JSON.parse(localStorage.getItem("oldMUI"));
    },
    chuansong(value) {
      console.log(this.gequ);
      
      this.$router.push({
        path: "/music",
        query: {
          id: value,
         shuzu:this.gequ
        },
      });
    },
    chuanzhi(value) {
      this.bendi.push(value);
      localStorage.setItem("oldMUI", JSON.stringify(this.bendi));
      this.bendi = JSON.parse(localStorage.getItem("oldMUI"));
      this.keyzhi = value;
      this.over = false;
      this.$api
        .getsousuo({
          keywords: value,
          limit: 100,
        })
        .then((res) => {
          this.gequ = res.result.songs;
        });
    },
  },
  mounted() {
    this.bendi = localStorage.getItem("oldMUI")
      ? JSON.parse(localStorage.getItem("oldMUI"))
      : [];
    this.$api.getliebiao().then((res) => {
      console.log(res);
      this.shuzu = res.result.hots;
    });
  },
};
</script>

<style scoped>
.int {
  width: 100%;
  height: 60px;
  padding: 15px 10px;
  border-bottom: 1.5px solid rgb(245, 245, 245);
}
.sou {
  position: relative;
  width: 355px;
  height: 30px;
  background-color: rgb(235, 236, 236);
  border-radius: 15px;
  color: rgb(201, 201, 201);
}
.sou span {
  display: inline-block;
  height: 30px;
  width: 29px;
}
.sou input {
  position: absolute;
  top: 0;
  left: 29px;
  border: 0;
  width: 295px;
  height: 30px;
  background-color: rgb(235, 236, 236);
  outline: none;
}
input::-webkit-input-placeholder {
  color: rgb(201, 201, 201);
}
.resou {
  width: 100%;
  /* height: 157px; */
  padding: 15px 10px 0;
}
.resou h3 {
  font-size: 12px;
  color: #666;
}
.resou ul {
  margin: 10px 0 7px;
}
.resou ul li {
  display: inline-block;
  height: 32px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 0 14px;
  font-size: 14px;
  line-height: 32px;
  color: #333;
  border: 1px solid #d3d4da;
  border-radius: 32px;
}
.duqu li {
  width: 100%;
  display: flex;
  height: 45px;
}
.duqu li span {
  width: 10%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-size: 17px;
  color: rgb(201, 201, 201);
}
.duqu li .ge {
  display: inline-block;
  width: 79%;
  border-bottom: 1.5px solid rgb(245, 245, 245);
  color: #333;
  line-height: 45px;
  font-size: 14px;
}
.duqu li p {
  display: inline-block;
  width: 11%;
  border-bottom: 1.5px solid rgb(245, 245, 245);
}
.h-re {
  height: 16px;
  margin: 8px 0 0 10px;
  font-size: 12px;
  color: #666;
  font-weight: 400;
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
  color: #333;
  font-size: 17px;
  padding-left: 4px;
}
.pio1 .cop2 span:nth-child(2) {
  color: #507daf;
}
.pio1 .cop2 span:nth-child(3) {
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
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
</style>