<!--
todo 应用组件App.vue
2.4.2. 基本使用
1)	引入组件
2)	映射成标签
3)	使用组件标签
-->
<!--模板页面 -->
<template>
  <div id="app">
    <!--用于渲染当前路由组件-->
    <router-view></router-view> <!--显示当前路由组件-->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide> <!--route代表当前路由-->
  </div>
</template>

<!--JS模块对象 -->
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    components:{
      FooterGuide
    },
    mounted(){
      //通知action获取地址信息
      this.$store.dispatch('getAddress')  //getAddress找action
    }

  }
</script>

<!--样式-->
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative

</style>
