<template>
  <div>
    <p v-html="list"></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TitleName",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    var id = this.$route.query.id;
    console.log(id);
    axios
      .get("https://cnodejs.org/api/v1/topic/"+id)
      .then(res => {
          this.list=res.data.data.content
          
      });
  }
};
</script>

<style lang="scss" scoped>
</style>