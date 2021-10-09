<template>
  <div>
    <Hader />
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Hader from "../components/hader.vue";
import Nav from "../components/Nav.vue";

export default {
  name: "Layout",
  components: {
    Hader,
    Nav,
    
  },
};
</script>

<style>
</style>