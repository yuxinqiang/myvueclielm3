<template>
    <div class="cityPage">
        <header-top :headerTitle="cityname">
            <router-link to="/" slot="changecity" class="change_city">切换城市</router-link>
            <span slot='login' class='headerLogin' icontype='more'>登陆|注册</span>
        </header-top>
        <form v-on:submit.prevent>
            <div>
                <input type="search" name="city" placeholder="输入学校、商务楼、地址" class="city_input input_style" required v-model='inputVaule'>
            </div>
            <div>
                <input type="submit" name="submit" class="city_submit input_style" @click='postpois' value="提交">
            </div>
        </form>
        <div v-if="historytitle" class="history_title">搜索历史</div>
        <ul class="getpois_ul">
            <li v-for="(item,index) in placelist" :key="index" @click='nextpage(index, item.geohash)'>
                <h4 class="pois_name ellipsis">{{item.name}}</h4>
                <p class="pois_address ellipsis">{{item.address}}</p>
            </li>
        </ul>
        <div class="search_none_place" v-if="placeNone">很抱歉！无搜索结果</div>
    </div>
</template>
<script>
import headerTop from 'components/header/Head.vue'
const localStorageconfig = {
    setStore: (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
    },
    /**
     * 获取localStorage
     */
    getStore: name => {
    if (!name) return
    return window.localStorage.getItem(name);
    },
    /**
     * 删除localStorage
     */
    removeStore: name => {
    if (!name) return
    window.localStorage.removeItem(name);
    }
}
export default {
    name:'city',
    data(){
        return{
            cityname:'', // 所选城市
            inputVaule:'', // 搜索地址
            placelist:[], // 搜索城市列表
            placeHistory:[], // 历史搜索记录
            cityid:'', // 搜索城市id
            historytitle: true, //显示搜索历史头部
            placeNone: false, // 搜索无结果，显示提示信息
            
        }
    },
    components:{
        headerTop
    },
    created(){
        this.$store.commit("changeLoginShow")
    },
    mounted(){
        // 获取所选城市信息
        this.cityInfo()
        // this.cityid = this.$route.params.id;
        this.cityid = '28';
        this.initData();
    },
    methods:{
        initData(){
                //获取搜索历史记录
                if (localStorageconfig.getStore('placeHistory')) {
                    this.placelist = JSON.parse(localStorageconfig.getStore('placeHistory'));
                }else{
                    this.placelist = [];
                }
            },
        cityInfo(){
             axios.get('https://elm.cangdu.org/v1/cities/28')
                .then(response=>{
                    this.cityname = response.data.name
                })
                .catch(error=>{
                    console.log(error);
                    alert('网络错误，不能访问');
                })
        },
        postpois(){
            //输入值不为空时才发送信息
            const _this = this;
            $.ajax({
                type: "get",
                url: "https://elm.cangdu.org/v1/pois",
                data: {
                    type: 'search',
                    city_id: 28,
                    keyword: '诺德广场'
                },
                success: function (response) {
                    console.log(response)
                    _this.historytitle = false;
                    _this.placelist = response;
                    _this.placeNone = response.length? false : true;
                },
                error:function(error){
                    console.log(error);
                    alert('网络错误，不能访问');
                }
            });
            // if (this.inputVaule) {
            //     axios.get('https://elm.cangdu.org/v1/pois',
            //     {
            //         params: {
            //           type: 'search',
            //           city_id: 28,
            //           keyword: '诺德广场'
            //         }
            //     })
            //     .then(response=>{
            //         console.log(response)
            //         this.historytitle = false;
            //         this.placelist = response;
            //         this.placeNone = response.length? false : true;
            //     })
            //     .catch(error=>{
            //         console.log(error);
            //         alert('网络错误，不能访问');
            //     })
            // }
        },
        nextpage(index, geohash){
            let history = localStorageconfig.getStore('placeHistory');
            let choosePlace = this.placelist[index];
            if (history) {
                let checkrepeat = false;
                this.placeHistory = JSON.parse(history);
                this.placeHistory.forEach(item => {
                    if (item.geohash == geohash) {
                        checkrepeat = true;
                    }
                })
                if (!checkrepeat) {
                    this.placeHistory.push(choosePlace)
                }
            }else {
                this.placeHistory.push(choosePlace)
            }
            localStorageconfig.setStore('placeHistory',this.placeHistory)
            this.$router.push({path:'/index', query:{geohash}})
        }
    }
}
</script>
<style lang="scss" scoped>
.cityPage {
    .change_city,
    .headerLogin {
        color: #fff;
    }
    form {
        width: 100%;
        background-color: #fff;
        margin: 1rem 0;
        padding: 1rem 0;
        div {
            width: 90%;
            margin: 0 auto;
            text-align: center;
            .city_input {
                border: 1px solid #e4e4e4;
                padding: 0 .3rem;
                font-size: .65rem;
                color: #333;
            }
            .city_submit {
                background-color: #3190e8;
                font-size: .65rem;
                color: #fff;
            }
        }
    }
    ul {
        background-color: #fff;
        border-top: 1px solid #e4e4e4;
        li {
            margin: 0 auto;
            padding-top: .65rem;
            border-bottom: 1px solid #e4e4e4;
            h4{
                margin: 0 auto .35rem;
                width: 90%;
                font-size: .65rem;
                color: #333;
            }
            p {
                width: 90%;
                margin: 0 auto .55rem;
                font-size: .45rem;
                color: #999;
            }
        }
    }
}
</style>
