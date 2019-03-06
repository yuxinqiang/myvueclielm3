<template>
    <div>
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="外卖">
                <img slot="icon">
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon">
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
            selected: 0
        }
    },

}
</script>
<style lang="scss" scoped>

</style>
