<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  created(){
    this.$store.commit("changeLoginShow")
  },
  computed:{
  },
  components: {
  }
}
</script>
