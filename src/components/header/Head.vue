<template>
    <div class="headCom">
        <mt-header :title=headerTitle>
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>
<script>

export default {
    name:'headerTop',
    data(){
        return{
            headerTitle: '标题过长会隐藏后面的内容啊哈哈哈哈'
        }
    }
}
</script>
<style lang="scss" scoped>
.headCom{
    width: 100%;
}
</style>
