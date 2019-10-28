<template>
  <div>
    <div class="footer-div">
      <p>RSS | 源码地址</p>
      <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <p>服务器赞助商为 <img src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9">，存储赞助商为 <img src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt=""> ，由 <img src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" alt=""> 提供应用性能服务。<p>
      <p>新手搭建 Node.js 服务器，推荐使用无需备案的 DigitalOcean(https://www.digitalocean.com/)</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"Footers"
};
</script>

<style lang="scss" scoped>
.footer-div {
  width: 100%;
  height: 220px;
  background: #ffffff;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 40px 0 ;
  
  p{
      width: 40%;
      background: #ffffff;
      margin-left: 250px;
       
      img{
          width: 100px;
          background: #ffffff;
      }
      
  }
}
</style>