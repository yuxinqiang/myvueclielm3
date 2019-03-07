<template>
    <div class="headCom">
        <mt-header :title=headerTitle>
            <!-- <router-link to="/" slot="left"> -->
                <mt-button  :icon=goback slot="left">
                    <slot name='logo'></slot>
                    <slot name='goBack'></slot>
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
         headerTitle: '',
        goback: 'back',
        icontype: 'more'
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
    }
}
</style>
