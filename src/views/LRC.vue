<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      <p class="lrc-p" :class="{'active':currentTime > allkeys[index] && currentTime < allkeys[index + 1]}" v-for="(item, key, index) in lrcdata" :key="index">
        <span>{{ item }} {{ scrollLRC(index) }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LRC",
  data() {
    return {
      lrcdata: "",
      allkeys: [],
    };
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    currentTime: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    //   解析数据

    filterLRC(value) {
      if (!value) return;
      var lrc = {};
      var lyrics = value.split("\n");
      var reg = /\[\d*:\d*(\.|:)\d*]/g;
      for (var i = 0; i < lyrics.length; i++) {
        var set = lyrics[i].match(reg);
        if (!set) continue;
        // 获取歌词
        var content = lyrics[i].replace(set, "");
        // 获取时间
        var t = set[0];
        var min = parseInt(t.match(/\[\d*/i).toString().slice(1));
        var sec = parseInt(t.match(/\:\d*/i).toString().slice(1));
        var time = min * 60 + sec;
        lrc[time] = content;
      }
      this.lrcdata = lrc;
      this.getAllKeys(lrc);
      // console.log(this.lrcdata);
    },
    getAllKeys(lrcArr) {
      for (var key in lrcArr) {
        this.allkeys.push(key);
      }
    },
    scrollLRC(index) {
      if (
        this.currentTime > this.allkeys[index] &&
        this.currentTime < this.allkeys[index + 1]
      )
        this.$refs.lrc.style.top = -(30 * (index-2)) + "px";
    },
  },
  mounted() {
    this.$api
      .getgeci({
        id: this.id,
      })
      .then((res) => {
        this.lrcdata = res.lrc.lyric;
        // 调用方法传递数据
        this.filterLRC(res.lrc.lyric);
      });
  },
};
</script>

<style scoped>
.active {
  color: red;
}

.lrcContainer {
  width: 100%;
  height: 150px;
  overflow: scroll;
  position: relative;
  color: #fff;
}

.lrc {
  width: 100%;
  position: absolute;
  top: 0;
}

.lrc-p {
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.up30 {
  margin-top: -30px;
}
</style>