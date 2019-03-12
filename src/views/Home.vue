<template>
  <div class="home">
    <header-top>
      <span slot='logo' class='headerLogo' @click='reload'>header.logo</span>
      <span slot='login' class='headerLogin' icontype='more'>登陆|注册</span>
    </header-top>
    <!-- 当前定位城市 -->
    <nav class="city_nav">
      <div class="city_tip">
          <span>当前定位城市：</span>
          <span>定位不准时，请在城市列表中选择</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess_city">
          <span>{{guessCity}}</span>
      </router-link>  
    </nav>
    <!-- 获取热门城市 -->
    <section id="hot_city_container">
        <h4 class="city_title">热门城市</h4>
        <ul class="citylistul clear">
            <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
                {{item.name}}
            </router-link>  
        </ul>
    </section>
    <!-- 获取所有城市 -->
    <section class="group_city_container">
        <ul class="letter_classify">
            <li v-for="(value, key, index) in sortgroupcity" :key="key"  class="letter_classify_li">
                <h4 class="city_title">{{key}}
                    <span v-if="index == 0">（按字母排序）</span>
                </h4>
                <ul class="groupcity_name_container citylistul clear">
                    <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                        {{item.name}}
                    </router-link>  
                </ul>
            </li>
        </ul>
    </section>
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
      guessCityid: '', //当前城市id
      hotcity: [], //热门城市数组
      sortgroupcity: {} // 所有城市列表对象
    }
  },
  created(){
    this.$store.commit("changeLoginShow")
  },
  mounted(){
    // 获取当前定位城市
    this.getCitytips()
    // 获取热门城市
    this.gethotCity()
    // 获取所有城市列表
    this.getallCity()
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
    },
    // 获取定位城市
    getCitytips(){
      axios.get('https://elm.cangdu.org/v1/cities?type=guess')
      .then(response=>{
         this.guessCity = response.data.name;
         this.guessCityid = response.data.id;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
       })
    },
    // 获取热门城市
    gethotCity(){
      axios.get('https://elm.cangdu.org/v1/cities?type=hot')
      .then(response=>{
         this.hotcity = response.data;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
       })
    },
    // 获取城市列表
    getallCity(){
      axios.get('https://elm.cangdu.org/v1/cities?type=group')
      .then(response=>{
        //  将数据按照字母顺序排序
          let sortobj = {};
          for (let i = 65; i <= 90; i++) {
              if (response.data[String.fromCharCode(i)]) {
                  sortobj[String.fromCharCode(i)] = response.data[String.fromCharCode(i)];
              }
          }
          this.sortgroupcity = sortobj;
      })
      .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
       })
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
    margin-bottom: 1rem;
    .city_tip {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      line-height: 2.5rem;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
    .guess_city {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      line-height: 2.5rem;
      padding: 10px;
      border-bottom: 2px solid #e4e4e4;
      span{
        color: #3190e8;
      }
    }
  }
  #hot_city_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    h4{
      padding: 0.625rem;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      color: #333;
      border-top: .025rem solid #e4e4e4;
      li{
        text-align: center;
        color: #3190e8;
        border-bottom: .025rem solid #e4e4e4;
        border-right: .025rem solid #e4e4e4;
        width: 25%;
        height: 2.5rem;
        line-height: 2.5rem;
      }
    }
  }
  .group_city_container {
    margin-top: 1rem;
    .letter_classify {
      h4{
        padding: 0.625rem;
      }
      >li{
        background-color: #fff;
        margin-bottom: 1rem;
        ul{
          display: flex;
          flex-wrap: wrap;
          color: #333;
          border-top: .025rem solid #e4e4e4;
          li{
            text-align: center;
            color: #3190e8;
            border-bottom: .025rem solid #e4e4e4;
            border-right: .025rem solid #e4e4e4;
            width: 25%;
            height: 2.5rem;
            color: #333;
            line-height: 2.5rem;
          }
        }
      }
    }
  }
}
</style>
