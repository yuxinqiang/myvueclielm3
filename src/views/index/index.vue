<template>
    <div>
        <header-top :header-title="cityname">
            <router-link to="/" slot="changecity" class="change_city">搜索</router-link>
            <span slot='login' class='headerLogin' icontype='more'>登陆|注册</span>
        </header-top>
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
        }
    },
    created(){
        this.cityjingwei = this.$route.query.geohash; // 获取经纬度数值
        this.getLocalInfo()
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
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
