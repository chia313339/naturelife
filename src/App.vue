<template>
  <div id="app">
    <!-- Vue Router 會根據路由切換顯示不同的分頁 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    if (window.innerWidth < 1200) {
      alert("您的裝置尺寸可能無法達到最佳瀏覽效果，建議使用大螢幕觀看");
    }
  }
}
</script>

<style>
/* 設定全域樣式，確保畫面固定且全白背景 */
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  background-color: #fff;
}
</style>
