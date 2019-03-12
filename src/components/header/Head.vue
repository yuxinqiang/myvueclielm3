<template>
    <div class="headCom">
        <mt-header :title=headerTitle class="header_title">
            <!-- <router-link to="/" slot="left"> -->
                <mt-button  :icon=goback slot="left">
                    <slot name='logo'></slot>
                    <slot name='goBack'></slot>
                    <slot name="changecity"></slot>
                    <!-- <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
                        返回
                    </section> -->
                </mt-button>
            <!-- </router-link> -->
            <mt-button :icon=icontype slot="right">
                <slot name='login'></slot>
            </mt-button>
        </mt-header>
    </div>
</template>
<script>

export default {
    name:'headerTop',
    data(){
        return{
        }
    },
    props:{
        headerTitle: String,
        goback: 'back',
        icontype: 'more'
    },
    mounted(){
        this.headerTitle
    }

}
</script>
<style lang="scss" scoped>
.headCom{
    width: 100%;
    color:#fff;
    height: 50px;
    header {
        height: 100%;
        padding: 1rem;
        color: #fff;
    }
}
</style>
