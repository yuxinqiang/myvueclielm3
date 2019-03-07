<template>
    <div>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="index">
                <img slot="icon" src="~assets/images/icon/home.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="order">
                <img slot="icon" src="~assets/images/icon/order.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="discove">
                <img slot="icon" src="~assets/images/icon/search.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="about">
                <img slot="icon" src="~assets/images/icon/mine.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>

export default {
    name:'footerBottom',
    data(){
        return{
            selected:''
        }
    },
    watch:{
        selected:function(newV,oldV){
            console.log(newV)
            this.$router.push({name:this.selected})
        }
    }

}
</script>
<style lang="scss" scoped>

</style>
