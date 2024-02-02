<template>
  <component :is="layout">
    <!-- 
    等同於<router-view></router-view>
    route的進入點，渲染route的位置
   -->
    <router-view />
  </component>
</template>
<script>
import Layout from "./views/Layout.vue"; // 指定使用背景(布局)

export default {
  components: {
    Layout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
