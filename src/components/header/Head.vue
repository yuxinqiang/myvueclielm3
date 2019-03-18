<template>
    <div class="headCom">
        <mt-header class="header_title">
            <mt-button  icon="back" slot="left">
                <slot name='logo'></slot>
                <slot name='goBack'></slot>
                <slot name="changecity"></slot>
                <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
                    返回
                </section>
            </mt-button>
            <mt-button icon="more" slot="right">
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
            goBack: false,
        }
    },
    props:{
        headerTitle:'',
    },
    mounted(){
        this.headerTitle
        console.log(this.headerTitle)
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
