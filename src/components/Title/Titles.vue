<template>
    <div>
        <ul class="tit-ul">
            <router-link :to="'/title/titlename?id='+v.id" tag="li" v-for="(v,i) in this.list" :key="i">
         
                {{v.title}}
         
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"Title",
        data() {
            return {
                list:[],
                tab:""
            }
        },
        mounted() {
            //页面渲染前加载数据
           this.get()
        },
        methods: {
            get(){ 
            axios.get("https://cnodejs.org/api/v1/topics?tab="+this.tab).then((res)=>{           
                this.list=res.data.data ;
            })
            }
            
        },
        watch: {
            $route(){
                //当tab数据发生改变就执行1·
                this.tab=this.$route.query.tab
            },
            //当tab发生改变就会请求一次数据
            tab(){
                this.get()
            }
        },
    }
</script>

<style lang="scss" scoped>
.tit-ul{
    width: 50%;
   list-style: none;
   margin-left: 250px;
    li{
        width: 100%;
        height: 40px;
         background: #fff;
         line-height: 40px;
    }
}
</style>