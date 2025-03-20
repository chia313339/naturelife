// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BasicInfo from '../views/BasicInfo.vue'
import About from '../views/About.vue'
import Building from '../views/Building.vue'
import FloorPlan from '../views/FloorPlan.vue'
import RelatedInfo from '../views/RelatedInfo.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/basicinfo', name: '基本資料', component: BasicInfo },
  { path: '/about', name: '聚泰建設', component: About },
  { path: '/building', name: '建材設備', component: Building },
  { path: '/floorplan', name: '平面規劃', component: FloorPlan },
  { path: '/relatedinfo', name: '相關資訊', component: RelatedInfo },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
