<template>
  <div>
    <ul class="con-ul">
      <li v-for="(v,i) in list" :key="i">
        <router-link :to="v.path" tag="span">{{v.name}}</router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      list: [
        { name: "全部", path: "/title?tab=all" },
        { name: "精华", path: "/title?tab=good" },
        { name: "分享", path: "/title?tab=share" },
        { name: "问答", path: "/title?tab=ask" },
        { name: "招聘", path: "/title?tab=job" },
        { name: "客户端测试", path: "/title?tab=dev" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.con-ul {
  width: 50%;
  display: flex;
  list-style: none;
  background: #F6F6F6;
  margin-left: 250px;
  li {
    width: 80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #F6F6F6;
    span{background: #80BD01;padding: 5px;font-size: 14px;

    }
  }
}
// font {
//   background: #fff;
// }
</style>