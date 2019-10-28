<template>
    <div>
        <div class="hader-div">
            <p>
                <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
            </p>
            <p>
                <input type="text" >
            </p>
            <ul>
                <li>首页</li>
                <li>新手入门</li>
                <li>API</li>
                <li>关于</li>
                <li>注册</li>
                <li>登录</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Top",
    }
</script>

<style lang="scss">

.hader-div{
    width: 100%;
    height: 60px;
    background:  #444444;
    p{
        float: left;
        background:  #444444;
        img{
            width: 150px;
            height: 50%;
            margin-top: 10px;
            margin-left: 250px;
            background:  #444444;
        }
        input{
            width: 200px;
            height: 20px;
            border-radius: 50px;
            margin-top: 20px;
            margin-left: 10px;
            
        }
    }
    ul{
        list-style: none;
        display: flex;
        text-align: center;
       float: right;
       margin-right: 200px;
       background:  #444444;
        li{
            margin-top: 20px;
            width: 80px;
            font-size: 14px;
            color: #fff;
            background:  #444444;
        }
    }
}
</style>