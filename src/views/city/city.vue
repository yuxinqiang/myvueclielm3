<template>
    <div>
        <header-top>
            <span slot='login' class='headerLogin' icontype='more'>登陆|注册</span>
        </header-top>
        这是城市内容页面
    </div>
</template>
<script>
import headerTop from 'components/header/Head.vue'
export default {
    name:'city',
    data(){
        return{

        }
    },
    methods:{
        cityInfo(){
             axios.get('https://elm.cangdu.org/v1/cities/:id')
                .then(response=>{
                    this.guessCity = response.data.name;
                    this.guessCityid = response.data.id;
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
