<template>
  <div class="home">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
import myHeader from '@/components/header/header'
export default {
  components: {
    myHeader
  },
  watch: {
    '$route': {
      handler (val) {
        console.log(val)
      },
      immediate: true
    }
  }
}
</script>


<style lang="scss" scoped>
.home {
  .el-header,
  .el-footer {
    line-height: 50px;
  }
}
</style>
