<template>
  <div class="xuanzhuan">
    <img :src="img" alt="" class="ret-background" />
    <div class="laba">
      <div class="zuo">
        <img :src="img" alt="" />
        <div>大家好，我是{{ myname }}</div>
      </div>
      <div class="you">打开看看</div>
    </div>
    <div class="xuanzhuan-set"></div>
    <div class="zhaopian-set">
      <img :src="img" alt="" />
    </div>
    <div class="zuoqu">
      <LRC :id="this.$route.query.id" :currentTime="currentTime" />
    </div>
    <div class="kuan">
      <audio
        ref="audio"
        :src="sat.url"
        controls
        autoplay
        class="yinpin"
      ></audio>
    </div>
    <div class="anniu">
      <div @click="shang" class="iconfont icon-shangyishou"></div>
      <div @click="xia" class="iconfont icon-xiayishou"></div>
    </div>
  </div>
</template>
<script>
import LRC from "./LRC.vue";
export default {
  name: "Music",
  data() {
    return {
      ser: {},
      sat: [],
      index: "",
      zhaopian: {},
      img: "",
      myname: "",
      currentTime: 0,
    };
  },
  components: {
    LRC,
  },
  methods: {
    shang() {
      if (this.index === 0) {
        this.index = this.ser.shuzu.length;
      }
      this.index -= 1;
      this.ser.id = this.ser.shuzu[this.index].id;
      this.$api.gethua({ ids: this.ser.id }).then((res) => {
        this.img = res.songs[0].al.picUrl;
        this.zhaopian = res.songs[0];
      });
      this.$api
        .getgequ({
          id: this.ser.id,
        })
        .then((res) => {
          this.sat = res.data[0];
        });
    },
    xia() {
      if (this.index == this.ser.shuzu.length - 1) {
        this.index = -1;
      }
      this.index += 1;
      this.ser.id = this.ser.shuzu[this.index].id;
      this.$api.gethua({ ids: this.ser.id }).then((res) => {
        this.img = res.songs[0].al.picUrl;
        this.zhaopian = res.songs[0];
      });
      this.$api
        .getgequ({
          id: this.ser.id,
        })
        .then((res) => {
          this.sat = res.data[0];
        });
    },
    shichang() {
      /* 获取音乐播放时间 
        1.音乐总时长
        2.音乐正在播放的时间节点
    */
      this.$refs.audio.addEventListener("timeupdate", this.currn);
    },
    removeshichang() {
      this.$refs.audio.removeEventListener("timeupdate", this.currn);
    },
    currn() {
      this.currentTime = this.$refs.audio.currentTime;
    },
  },
  mounted() {
    this.ser = this.$route.query;
    this.index = this.ser.shuzu.findIndex((value) => value.id == this.ser.id);
    /*  console.log(this.zhaopian, this.ser.shuzu);
    if (this.ser.shuzu[this.index].al) {
      this.zhaopian = this.ser.shuzu[this.index].al.picUrl;
      console.log(this.ser.shuzu[this.index].al.picUrl);
    } else if (this.ser.shuzu[this.index].picUrl) {
      this.zhaopian = this.ser.shuzu[this.index].picUrl;
      console.log(this.ser.shuzu[this.index].picUrl);
    } */
    // console.log(this.ser);
    this.$api
      .getgequ({
        id: this.ser.id,
      })
      .then((res) => {
        this.sat = res.data[0];
        this.shichang();
      });

    this.$api.gethua({ ids: this.ser.id }).then((res) => {
      this.zhaopian = res.songs[0];
      // console.log(res.songs[0])
      this.img = res.songs[0].al.picUrl;
      this.myname = res.songs[0].al.name;
    });
  },
  beforeDestroy() {
    this.removeshichang();
  },
  updated() {
    this.$refs.audio.addEventListener("ended", () => {
      this.xia();
    });
  },
};
</script>
<style scoped>
.laba {
  width: 100%;
  height: 49px;
  display: flex;
  flex: 1;
  padding: 10.5px 3.5%;
  color: #fff;
}
.laba .zuo {
  width: 70%;
  display: flex;
  align-content: center;
}
.laba .zuo img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
.laba .zuo div {
  display: inline-block;
  line-height: 28px;
  z-index: 9999;
}
.laba .you {
  width: 23%;
  padding: 4px 12px;
  font-size: 13px;
  border: 1px solid rgb(96, 96, 96);
  border-radius: 14px;
}
.zhaopian-set {
  width: 64%;
  height: 240px;
  margin: 25px 67.5px 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.zhaopian-set img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.kuan {
  margin-top: 20px;
}
.yinpin {
  margin-left: 10%;
  width: 80%;
  height: 54px;
}
.anniu {
  display: flex;
  padding: 0 25%;
  justify-content: space-between;
}
.iconfont {
  width: 20%;
  font-size: 60px;
  color: rgb(169, 171, 171);
}
</style>