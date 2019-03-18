<template>
    <div>
        <header-top :header-title='cityname'>
            <router-link to="/" slot="changecity" class="change_city">搜索</router-link>
            <span slot='login' class='headerLogin' icontype='more'>登陆|注册</span>
        </header-top>
        <mt-swipe class="swiper" :auto="0">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import headerTop from 'components/header/Head.vue'
export default {
    name:'indexCom',
    data(){
        return{
            cityname:'', // 详细定位地址
            cityjingwei:'', // 定位的经纬度
            index_entry: [], // 食品分类列表
        }
    },
    beforecreate(){
        this.getLocalInfo()
    },
    created(){
        this.cityjingwei = this.$route.query.geohash; // 获取经纬度数值
        this.getSoreList()
    },
    mounted(){
    },
    components:{
        headerTop
    },
    methods:{
        getLocalInfo(){
            axios.get('https://elm.cangdu.org/v2/pois/'+this.cityjingwei)
                .then(response=>{
                    this.cityname = response.name
                })
                .catch(error=>{
                    console.log(error);
                    alert('网络错误，不能访问');
                })
        },
        getSoreList(){
            axios.get('https://elm.cangdu.org/v2/index_entry')
                .then(response=>{
                    console.log(response)
                    this.index_entry = response.data
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
.swiper{
    background-color: #fff;
    border-bottom: .025rem solid #e4e4e4;
    height: 10.6rem;
    .mint-swipe-indicator {
        &.is-active {
            background: #02bed0;
        }
    }
}
</style>
