<!-- src/views/Home.vue -->
<template>
  <div class="home-container">
    <!-- 主背景圖片 -->
    <div class="background"></div>
    <!-- 左側選單：一開始隱藏，後來淡入出現 -->
    <div class="side-menu" :class="{ 'fade-in': showMenu }">
      <button
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-button btn"
        @click="navigate(item.route)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      showMenu: false,
      menuItems: [
        { label: '基本資料', route: '/basicinfo' },
        { label: '聚泰建設', route: '/about' },
        { label: '建材設備', route: '/building' },
        { label: '平面規劃', route: '/floorplan' },
        { label: '相關資訊', route: '/relatedinfo' },
      ]
    }
  },
  mounted() {
    // 延遲後啟動淡入動畫
    setTimeout(() => {
      this.showMenu = true;
    }, 300); // 一秒後出現
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
.home-container {
  position: relative;
  width: 100%;
  height: 100%;
}

/* 使用圖片作為背景 */
.background {
  width: 100%;
  height: 100%;
  background: url('@/assets/img/bg.jpg') no-repeat center center;
  background-size: cover;
}

/* 選單樣式 */
.side-menu {
  position: absolute;
  top: 0;
  left: 8%;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;                /* 初始隱藏 */
  transition: opacity 1s ease; /* 淡入動畫 */
}

/* 當加上 fade-in class 後，顯示選單 */
.side-menu.fade-in {
  opacity: 1;
}

/* 按鈕樣式 */
.menu-button {
  width: 80%;
  margin: 10px 0;
  padding: 15px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease;
  margin: 15px;
}

/* hover 稍微放大特效 */
.menu-button:hover {
  transform: scale(1.02);
  background: rgba(47, 47, 47, 0.4);
  color: #fff;
}
</style>
