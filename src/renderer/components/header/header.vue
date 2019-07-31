<template>
  <div>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">

      <el-menu-item index="2">
        <router-link to="/platform">我的工作台</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '2',
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath);
    },
  },
  mounted () {
  },
};
</script>

<style scoped>
</style>
