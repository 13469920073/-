<template>
  <div>
    <ul>
      <li><router-link to="/home" >推荐音乐</router-link></li>
      <li>
        <router-link to="/search" >热歌榜</router-link>
      </li>
      <li><router-link to="/mine" >搜索</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
ul {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(239, 239, 239);
}
li {
  flex: 1;
  display: block;
  width: 30%;
  text-align: center;
}
li a {

  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: #333;
}
.active {
  color: #dd001b;
  border-bottom: 2px solid #dd001b;
}
</style>