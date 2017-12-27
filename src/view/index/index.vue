<template>
  <div>
    <el-container>
    <el-header>
      <div class="el-header">
        <h3>Element-ui</h3>
      </div>
    </el-header>
    <el-main>
      <div class="block"> <!--swiper-->
        <el-carousel :interval="4000" type="card" class="swiper">
          <el-carousel-item v-for="item in swiperList" :key="item">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
    </el-main>
    <el-footer>
      footer
    </el-footer>
      </el-container>
  </div>
</template>

<script>
  import index from './index'
  export default index
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    color: #fff;
    width: 100%;
    text-align: center;
    background-color: #409EFF;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
