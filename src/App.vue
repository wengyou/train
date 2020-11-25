<template>
  <div id="app" :key="appKey">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return{
      appKey: 1,
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     // console.log(this.getStatus(this.$route.path))
  //     console.log(to, from)
  //   }
  // }
}
</script>

<style>
#app {
  
}
</style>
