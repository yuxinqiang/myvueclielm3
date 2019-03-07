<template>
  <div class="home">
    <header-top>
      <span slot='logo' class='headerLogo' goback='' @click='reload'>header.logo</span>
      <span slot='login' class='headerLogin' icontype='more'>登陆|注册</span>
    </header-top>
    <!-- 当前定位城市 -->
    <nav class="city_nav">
          <div class="city_tip">
              <span>当前定位城市：</span>
              <span>定位不准时，请在城市列表中选择</span>
          </div>
          <router-link :to="'/' + guessCityid" class="guess_city">
              <span>{{guessCity}}</span>
              <svg class="arrow_right">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
              </svg>
          </router-link>  
      </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import headerTop from 'components/header/Head.vue'
export default {
  name: 'home',
  data(){
    return{
      guessCity:'',  //当前城市
      guessCityid: '' //当前城市id
    }
  },
  created(){
    this.$store.commit("changeLoginShow")
  },
  mounted(){
    // 获取定位城市
      axios.get('https://elm.cangdu.org/v1/cities?type=guess')
      .then(response=>{
         console.log(response.data);
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
       })
    // axios.get('https://elm.cangdu.org/v1/cities?type=hot')
    //   .then(response=>{
    //      console.log(response.data);
    //   })
    //   .catch(error=>{
    //       console.log(error);
    //       alert('网络错误，不能访问');
    //    })
  },
  computed:{
  },
  components: {
    headerTop
  },
  methods:{
    // 点击logo刷新当前页
    reload(){
      window.location.reload();
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  .headerLogo,
  .headerLogin {
    color: #fff;
    padding: 1rem;
  }
  .city_nav{
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    margin-bottom: .4rem;
    .city_tip {
      width: 100%;
    }
  }
}
</style>
