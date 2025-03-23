<!-- src/views/Building.vue -->
<template>
  <div class="cust_container">
    <!-- 主背景圖片 -->
    <div class="background"></div>
    
    <!-- 左側選單 -->
    <div class="side-menu">
      <button
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-button btn"
        @click="navigate(item.route)"
      >
        {{ item.label }}
      </button>
    </div>

    <!-- 新增的 pulse 按鈕：一開始隱藏，後來淡入出現 -->
    <button
      class="pulse-button"
      :class="{ 'fade-in': showPulse }"
      data-bs-toggle="modal"
      data-bs-target="#basicInfoModal"
    >
      平面規劃
    </button>

    <!-- Bootstrap Modal -->
    <div class="modal fade" id="basicInfoModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content p-0 border-0">
          <!-- 右上角關閉按鈕 -->
          <button type="button" class="btn-close custom-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
          <!-- 輪播圖 -->
          <div id="basicCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="300000">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/img/floorplan/001.png" class="d-block w-100" alt="圖片1">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/002.png" class="d-block w-100" alt="圖片2">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/003.png" class="d-block w-100" alt="圖片3">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/004.png" class="d-block w-100" alt="圖片4">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/005.png" class="d-block w-100" alt="圖片5">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/006.png" class="d-block w-100" alt="圖片6">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/007.png" class="d-block w-100" alt="圖片7">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/008.png" class="d-block w-100" alt="圖片8">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/009.png" class="d-block w-100" alt="圖片9">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/010.png" class="d-block w-100" alt="圖片10">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/011.png" class="d-block w-100" alt="圖片11">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/012.png" class="d-block w-100" alt="圖片12">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/013.png" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/014.png" class="d-block w-100" alt="">
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/floorplan/015.png" class="d-block w-100" alt="">
              </div>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#basicCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#basicCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FloorPlan',
  data() {
    return {
      showPulse: false,
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
    // 延遲後啟動左側選單淡入動畫
    setTimeout(() => {
      this.showMenu = true;
    }, 300);
    // 延遲後啟動 pulse 按鈕淡入動畫
    setTimeout(() => {
      this.showPulse = true;
    }, 300);
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style scoped>
/* 外層容器，滿版 */
.cust_container {
  position: relative;
  width: 100%;
  height: 100%;
}

/* 背景圖片滿版 */
.background {
  width: 100%;
  height: 100%;
  background: url('@/assets/img/bg2.jpg') no-repeat center center;
  background-size: cover;
}

/* 左側選單 */
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
  transition: opacity 1s ease;
}

/* 選單按鈕樣式 */
.menu-button {
  width: 80%;
  margin: 15px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease;
}

.menu-button:hover {
  transform: scale(1.02);
  background: rgba(47, 47, 47, 0.4);
  color: #fff;
}

/* Pulse 按鈕樣式 */
.pulse-button {
  position: absolute;
  width: 300px;
  height: 120px;
  top: 50%;
  right: 35%;
  transform: translateY(-50%) scale(1);
  background: rgba(64, 136, 237, 0.59);
  color: #ffffff;
  font-size: 3rem;
  font-weight: bold;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1000;
  animation: pulse 2s infinite;
  opacity: 0;
  transition: opacity 1s ease;
}

/* 當加上 fade-in class 後，pulse 按鈕顯示 */
.pulse-button.fade-in {
  opacity: 1;
}

/* Pulse 動畫 */
@keyframes pulse {
  0% {
    transform: translateY(-50%) scale(1);
  }
  50% {
    transform: translateY(-50%) scale(1.1);
  }
  100% {
    transform: translateY(-50%) scale(1);
  }
}

/* 讓 modal 內的 carousel 圖片填滿整個 modal */
.modal-content img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* 自定義關閉按鈕 */
.custom-close {
  z-index: 1050; /* 高於圖片 */
}

.modal-dialog {
  width: 80vw !important;
  max-width: 90vw !important;
  max-height: 95vh !important;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(128, 128, 128, 0.5); /* 灰色半透明背景 */
  border-radius: 20%; /* 圓形背景 */
}

.carousel-control-prev-icon {
  margin-right: 60%; /* 調整左右箭頭位置 */
}
.carousel-control-next-icon {
  margin-left: 60%; /* 調整左右箭頭位置 */
}

.carousel-control-prev-icon:after,
.carousel-control-next-icon:after {
  font-size: 20px; /* 調整箭頭大小以適應圓形背景 */
}
</style>
