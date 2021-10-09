<template>
  <div class="headers">
    <h1><span class="iconfont icon-wangyiyunyinleclick"></span> 网易云音乐</h1>
    <div class="tof">下载APP</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headers {
  width: 100%;
  height: 84px;
  background-color: #d43c33;
}
h1 {
  position: absolute;
  top: 29.5px;
  left: 10px;
  line-height: 25px;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  width: 142px;
  height: 25px;
  /* background-color: royalblue; */
}
h1 span {
  display: inline-block;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
  background-color: #fff;
  color: rgb(255, 255, 255);
}
h1 .iconfont {
  font-size: 16px;
  color: #d43c33;
}
.tof {
  position: absolute;
  top: 24px;
  right: 10px;
  width: 100px;
  height: 36px;
  border-radius: 18px;
  background-color: #fff;
  line-height: 36px;
  font-size: 16px;
  text-align: center;
  color: #d43c33;
}
</style>