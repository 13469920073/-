<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name:'App',
 /* mounted() {
   this.$router.push('/')
 }, */
}
</script>



<style>
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
  background-color: #fefefe;
}
a {
  text-decoration: none;
}
li{
  list-style: none;
}

</style>
